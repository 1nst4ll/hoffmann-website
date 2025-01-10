// Component Props Types
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Service Types
export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'Industry News' | 'Company Updates' | 'Immigration Tips' | 'Local Insights';
  readTime: number;
  date: string;
  imageUrl: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

// Animation Types
export interface AnimationProps {
  delay?: number;
  duration?: number;
}
