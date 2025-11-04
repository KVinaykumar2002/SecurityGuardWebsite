import React, { useState, useRef, useEffect } from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';
import Button from './ui/Button';

const CompanyLogo: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div onClick={onClick} className="flex items-center space-x-3 cursor-pointer flex-shrink-0">
        <div className="bg-accent-gold p-2 rounded-lg shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        </div>
        <div>
            <span className="text-white text-lg font-bold tracking-wider block leading-tight">SHIELD</span>
            <span className="text-accent-gold text-xs font-semibold tracking-widest block leading-tight">AGENCY</span>
        </div>
    </div>
);

interface HeaderProps {
    activePage: Page;
    setPage: (page: Page, subPageId?: string) => void;
    isAuthenticated: boolean;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setPage, isAuthenticated, onLogout }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const leaveTimeout = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleLinkClick = (page: Page, subPageId?: string) => {
        setPage(page, subPageId);
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    };
    
    const handleMouseEnter = (label: string) => {
        if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
        setOpenDropdown(label);
    };

    const handleMouseLeave = () => {
        leaveTimeout.current = window.setTimeout(() => setOpenDropdown(null), 200);
    };
    
    const MobileNavLinks = () => (
        <ul className="flex flex-col space-y-2">
            {NAV_LINKS.map((item) => (
                <li key={item.label} className="border-b border-zinc-700 last:border-b-0">
                    {item.subItems ? (
                        <>
                            <button
                                className="w-full flex justify-between items-center py-3 text-white font-medium"
                                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                            >
                                {item.label}
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            <div className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === item.label ? 'max-h-96' : 'max-h-0'}`}>
                                <ul className="py-2 space-y-2">
                                    {item.subItems.map((sub) => (
                                        <li key={sub.label}>
                                            <button onClick={() => handleLinkClick(sub.page, sub.subPageId)} className="w-full text-left text-gray-300 hover:text-accent-gold transition-colors duration-200">
                                                {sub.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ) : (
                        <button onClick={() => handleLinkClick(item.page)} className="w-full text-left py-3 text-white font-medium">
                            {item.label}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <header className="fixed top-0 left-0 w-full z-50 p-4">
            <nav className={`w-full max-w-7xl mx-auto flex items-center justify-between p-3 bg-white/5 backdrop-blur-md border border-white/20 transition-all duration-500 ease-in-out ${isScrolled ? 'rounded-[30px] shadow-2xl shadow-black/40' : 'rounded-xl'}`}>
                <CompanyLogo onClick={() => handleLinkClick('Home')} />

                <div className="hidden lg:flex items-center space-x-2">
                    {NAV_LINKS.map((item) => (
                        <div key={item.label} className="relative" onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
                            <button
                                onClick={() => handleLinkClick(item.page, item.subItems?.[0]?.subPageId)}
                                className={`flex items-center px-4 py-2 rounded-full text-base font-semibold transition-colors duration-300 ${activePage === item.page ? 'text-accent-gold' : 'text-gray-200 hover:text-white'}`}
                            >
                                {item.label}
                                {item.subItems && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
                            </button>
                            {item.subItems && (
                                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${openDropdown === item.label ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                    <ul className="bg-zinc-800/80 backdrop-blur-lg border border-zinc-700 rounded-xl shadow-2xl p-2 min-w-[200px]">
                                        {item.subItems.map((sub) => (
                                            <li key={sub.label}>
                                                <button onClick={() => handleLinkClick(sub.page, sub.subPageId)} className="w-full text-left px-4 py-2 text-gray-200 rounded-md hover:bg-highlight-blue/50 hover:text-white transition-colors duration-200 text-sm">
                                                    {sub.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex items-center">
                    {isAuthenticated ? (
                         <div className="flex items-center space-x-2 ml-4 relative group">
                            <img src="https://picsum.photos/seed/admin/100/100" alt="User" className="w-10 h-10 rounded-full border-2 border-accent-gold"/>
                            <div className="absolute top-full right-0 mt-4 w-48 bg-zinc-800/80 backdrop-blur-lg border border-zinc-700 rounded-xl shadow-2xl p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                                <button onClick={() => handleLinkClick('Admin')} className="w-full text-left px-4 py-2 text-gray-200 rounded-md hover:bg-highlight-blue/50 hover:text-white transition-colors duration-200 text-sm">Dashboard</button>
                                <button onClick={onLogout} className="w-full text-left px-4 py-2 text-gray-200 rounded-md hover:bg-highlight-blue/50 hover:text-white transition-colors duration-200 text-sm">Logout</button>
                            </div>
                        </div>
                    ) : (
                        <Button onClick={() => handleLinkClick('Login')} variant="secondary" className="ml-4 !px-6 !py-2">Login</Button>
                    )}
                </div>
                
                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 mr-1">
{/* Fix: Corrected typo in SVG viewBox attribute from `viewBox="0 0 24" 24"` to `viewBox="0 0 24 24"`. */}
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                    </button>
                </div>
            </nav>

            <div className={`lg:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full px-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                 <div className="p-4 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 rounded-2xl shadow-2xl shadow-black/30">
                    <MobileNavLinks />
                 </div>
            </div>
        </header>
    );
};

export default Header;