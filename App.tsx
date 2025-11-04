
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import TrainingPage from './components/pages/TrainingPage';
import CustomersPage from './components/pages/CustomersPage';
import CertificationsPage from './components/pages/CertificationsPage';
import CareersPage from './components/pages/CareersPage';
import ContactPage from './components/pages/ContactPage';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('Home');
    const [activeSubPage, setActiveSubPage] = useState<string | null>(null);
    const [isFading, setIsFading] = useState(false);

    const handlePageChange = (page: Page, subPageId?: string) => {
        if (page === currentPage && (subPageId === activeSubPage || !subPageId)) return;

        setIsFading(true);
        setTimeout(() => {
            setCurrentPage(page);
            setActiveSubPage(subPageId || null);
            window.scrollTo(0, 0);
            setIsFading(false);
        }, 300);
    };
    
    useEffect(() => {
        // Initial fade-in
        setIsFading(true);
        const timer = setTimeout(() => setIsFading(false), 100);
        return () => clearTimeout(timer);
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <HomePage setPage={handlePageChange} />;
            case 'About':
                return <AboutPage subPageId={activeSubPage || 'journey'} />;
            case 'Services':
                return <ServicesPage serviceId={activeSubPage || 'private-security'} setPage={handlePageChange} />;
            case 'Training':
                return <TrainingPage setPage={handlePageChange} />;
            case 'Customers':
                return <CustomersPage />;
            case 'Certifications':
                return <CertificationsPage />;
            case 'Careers':
                return <CareersPage subPageId={activeSubPage || 'openings'} />;
            case 'Contact':
                return <ContactPage />;
            default:
                return <HomePage setPage={handlePageChange} />;
        }
    };

    return (
        <div className="bg-dark-navy min-h-screen relative">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
            <div className="relative z-10">
                <Header activePage={currentPage} setPage={handlePageChange} />
                <main className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                    {renderPage()}
                </main>
                <Footer setPage={handlePageChange} />
            </div>
        </div>
    );
};

export default App;
