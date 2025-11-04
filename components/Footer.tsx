
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { NAV_LINKS, ShieldCheckIcon } from '../constants';

interface FooterProps {
    setPage: (page: Page, subPageId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <footer className="bg-dark-navy/50 border-t border-white/10 py-12 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-1">
                    <div onClick={() => setPage('Home')} className="flex items-center space-x-2 cursor-pointer mb-4">
                         <ShieldCheckIcon className="w-8 h-8 text-highlight-blue" />
                         <span className="text-2xl font-bold">Aegis</span>
                    </div>
                    <p className="text-gray-400 text-sm">Your Safety, Our Priority. Providing top-tier security solutions since 2005.</p>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4 text-accent-gold">Quick Links</h3>
                    <ul className="space-y-2">
                       {NAV_LINKS.slice(0,4).map(link => (
                           <li key={link.label}>
                               <button onClick={() => setPage(link.page, link.subItems?.[0]?.subPageId)} className="text-gray-300 hover:text-highlight-blue transition-colors">
                                   {link.label}
                               </button>
                           </li>
                       ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4 text-accent-gold">Services</h3>
                    <ul className="space-y-2">
                        {NAV_LINKS.find(l => l.page === 'Services')?.subItems?.map(sub => (
                             <li key={sub.label}>
                               <button onClick={() => setPage(sub.page, sub.subPageId)} className="text-gray-300 hover:text-highlight-blue transition-colors">
                                   {sub.label}
                               </button>
                           </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-bold text-lg mb-4 text-accent-gold">Contact Us</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>123 Security Plaza, Metro City</li>
                        <li>contact@aegis.com</li>
                        <li>(555) 123-4567</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Aegis Security Solutions. All Rights Reserved.</p>
            </div>
            
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-highlight-blue text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </footer>
    );
};

export default Footer;
