
import React, { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const CertificationsPage: React.FC = () => {
    const certifications = [
        { name: 'ISO 9001:2015', logo: 'https://picsum.photos/seed/iso/200/150' },
        { name: 'ASIS International', logo: 'https://picsum.photos/seed/asis/200/150' },
        { name: 'OSHA Certified', logo: 'https://picsum.photos/seed/osha/200/150' },
        { name: 'C-TPAT Compliant', logo: 'https://picsum.photos/seed/ctpat/200/150' },
    ];
    
    const galleryItems = [
        { category: 'operations', src: 'https://picsum.photos/seed/op1/600/400' },
        { category: 'training', src: 'https://picsum.photos/seed/train1/600/400' },
        { category: 'staff', src: 'https://picsum.photos/seed/staff1/600/400' },
        { category: 'events', src: 'https://picsum.photos/seed/event1/600/400' },
        { category: 'operations', src: 'https://picsum.photos/seed/op2/600/400' },
        { category: 'training', src: 'https://picsum.photos/seed/train2/600/400' },
        { category: 'staff', src: 'https://picsum.photos/seed/staff2/600/400' },
        { category: 'events', src: 'https://picsum.photos/seed/event2/600/400' },
    ];

    const [filter, setFilter] = useState('all');
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const filteredGallery = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

    const filters = ['all', 'operations', 'training', 'staff', 'events'];

    return (
        <div className="pt-24 pb-12">
            <header className="text-center mb-16 px-4">
                <AnimatedSection>
                    <h1 className="text-5xl font-bold">Credentials & <span className="text-accent-gold">Gallery</span></h1>
                    <p className="text-lg text-gray-300 mt-2">Our commitment to excellence, certified and captured.</p>
                </AnimatedSection>
            </header>

            {/* Certifications Section */}
            <section className="py-12 container mx-auto px-4">
                 <AnimatedSection>
                    <h2 className="text-4xl font-bold text-center mb-12"><span className="text-highlight-blue">Our</span> Certifications</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {certifications.map(cert => (
                            <div key={cert.name} className="bg-glass-bg border border-white/10 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
                                <img src={cert.logo} alt={cert.name} className="h-20 mx-auto mb-2" />
                                <p className="font-semibold">{cert.name}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>
            
            {/* Gallery Section */}
            <section className="py-12 container mx-auto px-4">
                 <AnimatedSection>
                    <h2 className="text-4xl font-bold text-center mb-8"><span className="text-highlight-blue">In The</span> Field</h2>
                    <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
                        {filters.map(f => (
                            <button key={f} onClick={() => setFilter(f)} className={`capitalize px-4 py-2 rounded-md transition-colors font-semibold ${filter === f ? 'bg-highlight-blue text-white' : 'bg-glass-bg hover:bg-white/20'}`}>
                                {f}
                            </button>
                        ))}
                    </div>
                </AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredGallery.map((item, index) => (
                        <AnimatedSection key={index} delay="delay-100">
                             <div className="group relative overflow-hidden rounded-lg cursor-pointer" onClick={() => setLightboxImage(item.src)}>
                                <img src={item.src} alt={`${item.category} ${index}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
            
            {/* Lightbox */}
            {lightboxImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
                    <img src={lightboxImage} alt="Enlarged view" className="max-w-full max-h-full rounded-lg" onClick={e => e.stopPropagation()} />
                     <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 text-white text-4xl">&times;</button>
                </div>
            )}
        </div>
    );
};

export default CertificationsPage;
