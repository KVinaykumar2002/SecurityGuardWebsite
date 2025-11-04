
import React from 'react';
import { Page } from '../../types';
import { SERVICES_DATA, ShieldCheckIcon } from '../../constants';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

interface ServicesPageProps {
    serviceId: string;
    setPage: (page: Page, subPageId?: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ serviceId, setPage }) => {
    const service = SERVICES_DATA.find(s => s.id === serviceId);

    if (!service) {
        return (
            <div className="pt-24 min-h-screen flex items-center justify-center">
                <h1 className="text-3xl text-accent-gold">Service not found.</h1>
            </div>
        );
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
                <img src={service.image} alt={service.title} className="absolute z-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 p-4">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-6xl font-bold mb-2">{service.title}</h1>
                        <p className="text-lg md:text-xl text-accent-gold">{service.tagline}</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Service Details Section */}
            <section className="py-20 bg-dark-navy">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                             <AnimatedSection>
                                <h2 className="text-3xl font-bold text-highlight-blue mb-4">Service Overview</h2>
                                <p className="text-gray-300 leading-relaxed mb-8">{service.description}</p>
                                
                                <h3 className="text-2xl font-bold text-highlight-blue mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {service.details.map((detail, index) => (
                                        <li key={index} className="flex items-center">
                                            <ShieldCheckIcon className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" />
                                            <span className="text-gray-200">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedSection>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <AnimatedSection delay="delay-300">
                                <div className="bg-glass-bg border border-white/10 rounded-lg p-6 sticky top-28">
                                    <h3 className="text-xl font-bold mb-4 text-accent-gold">Our Services</h3>
                                    <ul className="space-y-2">
                                        {SERVICES_DATA.map(s => (
                                            <li key={s.id}>
                                                <button 
                                                    onClick={() => setPage('Services', s.id)} 
                                                    className={`w-full text-left p-2 rounded transition-colors ${s.id === serviceId ? 'bg-highlight-blue text-white' : 'hover:bg-highlight-blue/20'}`}
                                                >
                                                    {s.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8">
                                        <Button onClick={() => setPage('Contact')} className="w-full">
                                            Request This Service
                                        </Button>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
