
import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const Settings: React.FC = () => {
    return (
        <AnimatedSection>
            <h1 className="text-3xl font-bold mb-6">Settings</h1>
            <div className="bg-glass-bg backdrop-blur-xl border border-white/10 rounded-lg p-8">
                 <h2 className="text-2xl font-bold text-accent-gold mb-4">Site Configuration</h2>
                 <p className="text-gray-300 mb-6">Manage admin accounts and global website settings. (Functionality coming soon).</p>

                 <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                    <span className="font-semibold">Dark Mode</span>
                    <label htmlFor="dark-mode-toggle" className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" id="dark-mode-toggle" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-highlight-blue"></div>
                    </label>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Settings;
