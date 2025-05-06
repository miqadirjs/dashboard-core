import React from 'react';
import { Link } from 'react-router-dom';

type NavItemProps = {
  title: string;
  subItems: string[];
  activeNav: string;
  activeSubNav: string;
};

const NavItem: React.FC<NavItemProps> = ({ title, subItems, activeNav, activeSubNav }) => {
  const getHref = (item: string): string => {
    return `/${item
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')}`;
  };

  return (
    <div className="mb-4">
      <div 
        className={`px-3 py-2 cursor-pointer ${activeNav === title ? 'bg-primary' : ''}`}
      >
        <span className="fw-semibold">{title}</span>
      </div>
      {activeNav === title && (
        <div className="ms-3 mt-2">
          {subItems.map((item) => (
            <Link 
              key={item} 
              to={getHref(item)}
              className={`d-block px-2 py-1 rounded cursor-pointer ${activeSubNav === item ? 'bg-primary-subtle' : ''}`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;