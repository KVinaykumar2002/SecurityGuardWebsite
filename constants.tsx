import React from 'react';
import { NavItem, Service, Testimonial, ManagementProfile, JobOpening, CarouselSlide, Page } from './types';

// SVG Icons
export const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);
export const UserCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
);
export const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><line x1="9" y1="4" x2="9" y2="16"></line><line x1="15" y1="4" x2="15" y2="16"></line><line x1="4" y1="9" x2="16" y2="9"></line><line x1="4" y1="15" x2="16" y2="15"></line></svg>
);
export const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);
export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
export const HandgunIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 6.5l-3.5 3.5M16 8l-8 8M12 6l-2 2M3 21l8-8M17 3l3 3M18 11l-2-2"></path></svg>
);
export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
);
export const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
export const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);
export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);


// Navigation Data
export const NAV_LINKS: NavItem[] = [
  { label: 'Home', page: 'Home' },
  {
    label: 'About', page: 'About',
    subItems: [
      { label: 'Our Journey', page: 'About', subPageId: 'journey' },
      { label: 'Why Choose Us', page: 'About', subPageId: 'why-us' },
      { label: 'Our Management', page: 'About', subPageId: 'management' },
    ],
  },
  {
    label: 'Services', page: 'Services',
    subItems: [
      { label: 'Private Security', page: 'Services', subPageId: 'private-security' },
      { label: 'Personal Bodyguard', page: 'Services', subPageId: 'personal-bodyguard' },
      { label: 'Armed Security', page: 'Services', subPageId: 'armed-security' },
      { label: 'Facility Management', page: 'Services', subPageId: 'ifms' },
    ],
  },
  { label: 'Training', page: 'Training' },
  { label: 'Customers', page: 'Customers' },
  { label: 'Certifications', page: 'Certifications' },
  {
    label: 'Careers', page: 'Careers',
    subItems: [
      { label: 'Job Openings', page: 'Careers', subPageId: 'openings' },
      { label: 'Apply Now', page: 'Careers', subPageId: 'apply' },
    ],
  },
  { label: 'Contact', page: 'Contact' },
];

// Carousel Slides Data
export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    image: 'https://picsum.photos/seed/carousel1/1920/1080',
    title: <>Unyielding <span className="text-accent-gold">Vigilance</span>, Day & Night</>,
    description: 'Our elite teams provide 24/7 surveillance and on-site presence, ensuring your assets are always secure.',
    ctaText: 'Explore Our Services',
    ctaPage: 'Services',
    ctaSubPageId: 'private-security',
  },
  {
    image: 'https://picsum.photos/seed/carousel2/1920/1080',
    title: <>Close Protection <span className="text-accent-gold">Redefined</span></>,
    description: 'Discreet, professional, and highly trained bodyguards for executives, dignitaries, and high-profile individuals.',
    ctaText: 'Learn About Protection',
    ctaPage: 'Services',
    ctaSubPageId: 'personal-bodyguard',
  },
  {
    image: 'https://picsum.photos/seed/carousel3/1920/1080',
    title: <>Securing Tomorrow's <span className="text-accent-gold">Events</span></>,
    description: 'From corporate functions to large-scale public gatherings, our crowd control and event security is second to none.',
    ctaText: 'Get a Free Consultation',
    ctaPage: 'Contact',
  },
];


// Services Data
export const SERVICES_DATA: Service[] = [
    {
        id: 'private-security',
        title: 'Private Security',
        tagline: 'Discreet and professional protection for your assets.',
        description: 'Our private security services offer comprehensive protection for residential, commercial, and industrial properties. We employ highly trained, unarmed or armed guards to deter threats, monitor access, and ensure a safe environment.',
        details: ['24/7 On-site Guarding', 'Mobile Patrols & Surveillance', 'Access Control & Monitoring', 'Alarm Response Services', 'Loss Prevention Strategies'],
        icon: ShieldCheckIcon,
        image: 'https://picsum.photos/seed/private-security/1200/800',
    },
    {
        id: 'personal-bodyguard',
        title: 'Personal Bodyguard',
        tagline: 'Close protection for individuals and families.',
        description: 'We provide elite personal protection services for executives, celebrities, and high-net-worth individuals. Our bodyguards are trained in threat assessment, defensive driving, and emergency response to ensure your personal safety at all times.',
        details: ['Executive Protection Details', 'Secure Transportation', 'Travel Security Management', 'Threat & Vulnerability Assessment', 'Family & Residential Security'],
        icon: UserCheckIcon,
        image: 'https://picsum.photos/seed/bodyguard/1200/800',
    },
    {
        id: 'armed-security',
        title: 'Armed Security Service',
        tagline: 'Highly trained armed personnel for high-risk environments.',
        description: 'For situations demanding a higher level of security, our armed guards provide a formidable deterrent. All personnel are rigorously trained, licensed, and vetted to handle high-threat situations with professionalism and control.',
        details: ['Licensed & Certified Officers', 'Advanced Firearms Training', 'Crisis Management & Response', 'High-Value Asset Protection', 'Financial Institution Security'],
        icon: HandgunIcon,
        image: 'https://picsum.photos/seed/armed-security/1200/800',
    },
    {
        id: 'ifms',
        title: 'Integrated Facility Management (IFMS)',
        tagline: 'Holistic management for your property\'s safety and operations.',
        description: 'Our IFMS solutions combine security with other essential facility services. This integrated approach streamlines operations, reduces costs, and creates a seamless, secure environment for your employees and visitors.',
        details: ['Integrated Security Systems', 'Janitorial & Maintenance Staff', 'Front Desk & Concierge Services', 'Parking Management', 'Emergency Preparedness Planning'],
        icon: BuildingIcon,
        image: 'https://picsum.photos/seed/ifms/1200/800',
    },
];

// Management Profiles Data
export const MANAGEMENT_PROFILES: ManagementProfile[] = [
    {
        name: 'Johnathan Cole',
        title: 'Founder & CEO',
        bio: 'With over 20 years in law enforcement and private security, Johnathan founded Aegis with a mission to provide unparalleled safety and peace of mind.',
        image: 'https://picsum.photos/seed/ceo/400/400',
    },
    {
        name: 'Maria Rodriguez',
        title: 'Director of Operations',
        bio: 'Maria orchestrates all field operations, ensuring every client receives the highest standard of service. Her logistical expertise is the backbone of our reliability.',
        image: 'https://picsum.photos/seed/director/400/400',
    },
    {
        name: 'David Chen',
        title: 'Head of Training',
        bio: 'A former special forces instructor, David has developed our industry-leading training program, shaping the most capable security professionals in the field.',
        image: 'https://picsum.photos/seed/trainer/400/400',
    },
];

// Testimonials Data
export const TESTIMONIALS: Testimonial[] = [
    {
        quote: 'Aegis Security has been an invaluable partner for our corporate events. Their professionalism and attention to detail are second to none. We feel completely secure with them on site.',
        name: 'Sarah Jenkins',
        company: 'Global Events Corp.',
        image: 'https://picsum.photos/seed/client1/100/100',
    },
    {
        quote: 'The personal protection detail for our CEO was flawless. Discreet, efficient, and incredibly professional. I highly recommend Aegis for any executive security needs.',
        name: 'Mark Thompson',
        company: 'Innovatech Inc.',
        image: 'https://picsum.photos/seed/client2/100/100',
    },
    {
        quote: 'Switching to Aegis for our facility management and security has streamlined our operations and improved safety significantly. Their integrated approach is a game-changer.',
        name: 'Emily White',
        company: 'Pinnacle Properties',
        image: 'https://picsum.photos/seed/client3/100/100',
    },
];

// Job Openings Data
export const JOB_OPENINGS: JobOpening[] = [
    {
        title: 'Unarmed Security Officer',
        location: 'New York, NY',
        type: 'Full-time',
        description: [
            'Monitor and patrol premises to prevent and detect signs of intrusion.',
            'Control access points and authorize entrance and departure of employees and visitors.',
            'Write detailed reports on daily activities and irregularities.',
            'Possess a valid state security license and excellent communication skills.'
        ]
    },
    {
        title: 'Armed Security Guard',
        location: 'Los Angeles, CA',
        type: 'Full-time',
        description: [
            'Provide armed security for high-value assets and facilities.',
            'Respond to alarms and emergency situations with professionalism.',
            'Maintain a high level of proficiency with firearms and security equipment.',
            'Requires valid armed guard license, clean background check, and 3+ years experience.'
        ]
    },
    {
        title: 'Event Bouncer / Crowd Control',
        location: 'Miami, FL',
        type: 'Part-time / Contract',
        description: [
            'Ensure the safety and security of guests at events, nightclubs, and concerts.',
            'Manage crowd flow, check IDs, and de-escalate potential conflicts.',
            'Excellent interpersonal skills and a calm demeanor under pressure are essential.',
            'Previous experience in event security or crowd management preferred.'
        ]
    },
];