import React from 'react';

interface LucideIconProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);
