
import React, { ReactNode } from 'react';

// Fix: Extend React.ButtonHTMLAttributes to allow standard button props like 'type'.
// This makes the component more flexible and solves the error when used in forms.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseClasses = 'px-8 py-3 font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg';
    
    const variantClasses = {
        primary: 'bg-highlight-blue hover:bg-blue-500 text-white shadow-highlight-blue/30',
        secondary: 'bg-accent-gold hover:bg-yellow-300 text-dark-navy shadow-accent-gold/30',
    };

    return (
        <button {...props} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
