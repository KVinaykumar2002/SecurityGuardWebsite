
import React, { useState, useEffect } from 'react';
import { Page, NavItem } from '../types';
import { NAV_LINKS } from '../constants';
import { ShieldCheckIcon } from '../constants';

interface HeaderProps {
    activePage: Page;
    setPage: (page: Page, subPageId?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (label: string) => {
        setOpenDropdown(label);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };
    
    const handleLinkClick = (page: Page, subPageId?: string) => {
        setPage(page, subPageId);
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    }
    
    const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
        <ul className={`flex ${mobile ? 'flex-col space-y-4' : 'flex-row items-center space-x-8'}`}>
            {NAV_LINKS.map((item) => (
                <li key={item.label} className="relative" onMouseEnter={() => !mobile && handleMouseEnter(item.label)} onMouseLeave={() => !mobile && handleMouseLeave()}>
                    {item.subItems ? (
                        <>
                            <button
                                className={`font-medium transition-colors duration-300 ${activePage === item.page ? 'text-accent-gold' : 'hover:text-accent-gold'}`}
                                onClick={() => mobile ? setOpenDropdown(openDropdown === item.label ? null : item.label) : handleLinkClick(item.page, item.subItems?.[0]?.subPageId)}
                            >
                                {item.label}
                            </button>
                            {openDropdown === item.label && (
                                <div className={` ${mobile ? 'relative mt-2' : 'absolute top-full left-1/2 -translate-x-1/2 pt-4'}`}>
                                    <ul className="bg-glass-bg backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl p-2 min-w-[200px]">
                                        {item.subItems.map((sub) => (
                                            <li key={sub.label}>
                                                <button onClick={() => handleLinkClick(sub.page, sub.subPageId)} className="w-full text-left px-4 py-2 rounded-md hover:bg-highlight-blue/50 transition-colors duration-200">
                                                    {sub.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
                    ) : (
                        <button onClick={() => handleLinkClick(item.page)} className={`font-medium transition-colors duration-300 ${activePage === item.page ? 'text-accent-gold' : 'hover:text-accent-gold'}`}>
                            {item.label}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-dark-navy/80 backdrop-blur-xl border-b border-white/10' : 'py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div onClick={() => setPage('Home')} className="flex items-center space-x-2 cursor-pointer">
                    <ShieldCheckIcon className="w-8 h-8 text-highlight-blue" />
                    <span className="text-2xl font-bold">Aegis</span>
                </div>
                <nav className="hidden lg:block">
                   <NavLinks />
                </nav>
                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                 <div className="lg:hidden mt-4 p-4 bg-dark-navy/95 backdrop-blur-xl">
                    <NavLinks mobile={true} />
                </div>
            )}
        </header>
    );
};

export default Header;
