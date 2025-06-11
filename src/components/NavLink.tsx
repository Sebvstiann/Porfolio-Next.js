import React from 'react';

interface NavLinkProps {
  href: string;
  title: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <a href={href} className="block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-yellow-400 transition-colors">
      {title}
    </a>
  );
}; 