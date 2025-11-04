
import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const WebsiteEnquiries: React.FC = () => {
    return (
        <AnimatedSection>
            <h1 className="text-3xl font-bold mb-6">Website Enquiries</h1>
            <div className="bg-glass-bg backdrop-blur-xl border border-white/10 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-accent-gold">Coming Soon</h2>
                <p className="text-gray-300 mt-2">This section will display messages from the Contact Us form, allowing you to reply or mark them as handled.</p>
            </div>
        </AnimatedSection>
    );
};

export default WebsiteEnquiries;
