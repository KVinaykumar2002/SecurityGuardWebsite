
import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseClasses = 'px-8 py-3 font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg';
    
    const variantClasses = {
        primary: 'bg-highlight-blue hover:bg-blue-500 text-white shadow-highlight-blue/30',
        secondary: 'bg-accent-gold hover:bg-yellow-300 text-dark-navy shadow-accent-gold/30',
    };

    return (
        <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
