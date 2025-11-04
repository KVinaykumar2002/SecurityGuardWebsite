
import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const GalleryManagement: React.FC = () => {
    return (
        <AnimatedSection>
            <h1 className="text-3xl font-bold mb-6">Gallery Management</h1>
            <div className="bg-glass-bg backdrop-blur-xl border border-white/10 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-accent-gold">Coming Soon</h2>
                <p className="text-gray-300 mt-2">Admins will be able to upload, categorize, and delete images and videos for the public gallery from this section.</p>
            </div>
        </AnimatedSection>
    );
};

export default GalleryManagement;
