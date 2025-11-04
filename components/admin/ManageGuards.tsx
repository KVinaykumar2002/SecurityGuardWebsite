
import React, { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { GUARD_PROFILES } from '../../constants';
import Modal from './ui/Modal';
import Button from '../ui/Button';

const ManageGuards: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <AnimatedSection>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Manage Guards & Bouncers</h1>
                    <Button variant="secondary" onClick={() => setIsModalOpen(true)}>Add New Guard</Button>
                </div>
                 <div className="flex items-center mb-4 bg-white/5 border border-white/10 rounded-lg px-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" placeholder="Search by name, region, or shift..." className="bg-transparent w-full p-3 placeholder-gray-500 focus:outline-none" />
                </div>
            </AnimatedSection>
            
            <AnimatedSection delay="delay-200">
                <div className="bg-glass-bg backdrop-blur-xl border border-white/10 rounded-lg overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="p-4 font-semibold">Guard ID</th>
                                <th className="p-4 font-semibold">Name</th>
                                <th className="p-4 font-semibold">Location</th>
                                <th className="p-4 font-semibold">Shift</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {GUARD_PROFILES.map(guard => (
                                <tr key={guard.id} className="border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-gray-300">{guard.id}</td>
                                    <td className="p-4 flex items-center">
                                        <img src={guard.image} alt={guard.name} className="w-10 h-10 rounded-full mr-3"/>
                                        <span>{guard.name}</span>
                                    </td>
                                    <td className="p-4 text-gray-300">{guard.location}</td>
                                    <td className="p-4 text-gray-300">{guard.shift}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${guard.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                                            {guard.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button className="text-highlight-blue hover:underline">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AnimatedSection>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Guard">
                 <form className="space-y-4">
                    <input type="text" placeholder="Full Name" required className="w-full p-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight-blue"/>
                    <input type="text" placeholder="Assigned Location" required className="w-full p-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight-blue"/>
                    <select required className="w-full p-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight-blue appearance-none">
                        <option>Day Shift</option>
                        <option>Night Shift</option>
                        <option>Flex Shift</option>
                    </select>
                    <input type="tel" placeholder="Contact Number" required className="w-full p-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight-blue"/>
                    <div className="flex justify-end pt-4">
                        <Button onClick={() => setIsModalOpen(false)}>Add Guard</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ManageGuards;
