// Fix: Import ElementType to resolve 'Cannot find namespace 'React'' error.
import type { ElementType, ReactNode } from 'react';

export type Page =
  | 'Home'
  | 'About'
  | 'Services'
  | 'Training'
  | 'Customers'
  | 'Certifications'
  | 'Careers'
  | 'Contact';

export interface NavItem {
  label: string;
  page: Page;
  subItems?: NavSubItem[];
}

export interface NavSubItem {
    label: string;
    page: Page;
    subPageId: string;
}

export interface Service {
    id: string;
    title: string;
    tagline: string;
    description: string;
    details: string[];
    icon: ElementType;
    image: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    company: string;
    image: string;
}

export interface ManagementProfile {
    name: string;
    title: string;
    bio: string;
    image: string;
}

export interface JobOpening {
    title: string;
    location: string;
    type: string;
    description: string[];
}

export interface CarouselSlide {
  image: string;
  title: ReactNode;
  description: string;
  ctaText: string;
  ctaPage: Page;
  ctaSubPageId?: string;
}