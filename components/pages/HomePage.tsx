import React from 'react';
import { Page } from '../../types';
import { SERVICES_DATA, ShieldCheckIcon, UserCheckIcon, LockIcon, TESTIMONIALS } from '../../constants';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import HeroCarousel from '../HeroCarousel';
import TestimonialScroller from '../ui/TestimonialScroller';

interface HomePageProps {
    setPage: (page: Page, subPageId?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
    return (
        <div>
            {/* Hero Section */}
            <HeroCarousel setPage={setPage} />
            
            {/* Services Highlight Section */}
            <section className="py-20 bg-dark-navy">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-4xl font-bold">Our Core <span className="text-highlight-blue">Services</span></h2>
                        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Comprehensive security services designed to meet the unique challenges of any environment.</p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SERVICES_DATA.map((service, index) => (
                             <AnimatedSection key={service.id} delay={`delay-${index * 150}`}>
                                <div className="bg-glass-bg backdrop-blur-xl border border-white/10 rounded-lg p-6 text-center h-full flex flex-col items-center group hover:border-highlight-blue/50 transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="bg-highlight-blue/10 p-4 rounded-full mb-4 group-hover:bg-highlight-blue/20 transition-colors">
                                        <service.icon className="w-10 h-10 text-highlight-blue" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-gray-400 flex-grow mb-4">{service.tagline}</p>
                                    <button onClick={() => setPage('Services', service.id)} className="font-semibold text-accent-gold hover:text-yellow-300 transition-colors">
                                        Learn More &rarr;
                                    </button>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Why Choose Us Section */}
            <section className="py-20">
                 <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <img src="https://picsum.photos/seed/team-on-duty/800/600" alt="Security Team" className="rounded-lg shadow-2xl"/>
                    </AnimatedSection>
                    <AnimatedSection delay="delay-300">
                        <h2 className="text-4xl font-bold mb-4">Unmatched <span className="text-highlight-blue">Expertise & Reliability</span></h2>
                        <p className="text-gray-300 mb-6">Aegis is built on a foundation of discipline, integrity, and rigorous training. Our commitment to excellence ensures we provide not just security, but confidence.</p>
                        <ul className="space-y-4">
                            <li className="flex items-start"><ShieldCheckIcon className="w-6 h-6 text-accent-gold mr-3 mt-1 flex-shrink-0" /><span><strong>Vetted Professionals:</strong> Every officer undergoes extensive background checks and an elite training program.</span></li>
                            <li className="flex items-start"><UserCheckIcon className="w-6 h-6 text-accent-gold mr-3 mt-1 flex-shrink-0" /><span><strong>Client-Centric Approach:</strong> We collaborate with you to develop a customized security strategy that fits your exact needs.</span></li>
                             <li className="flex items-start"><LockIcon className="w-6 h-6 text-accent-gold mr-3 mt-1 flex-shrink-0" /><span><strong>Cutting-Edge Technology:</strong> We leverage the latest surveillance and communication technology for optimal protection.</span></li>
                        </ul>
                         <div className="mt-8">
                            <Button onClick={() => setPage('About', 'why-us')} variant="secondary">Why Choose Us</Button>
                        </div>
                    </AnimatedSection>
                 </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialScroller testimonials={TESTIMONIALS} />

        </div>
    );
};

export default HomePage;