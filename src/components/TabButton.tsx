import React from 'react';

interface TabButtonProps {
  selectTab: () => void;
  active: boolean;
  children: React.ReactNode;
  className?: string;
}

export const TabButton: React.FC<TabButtonProps> = ({ selectTab, active, children, className }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className={`mr-3 font-semibold hover:text-white ${buttonClasses} ${className || ''}`}>
      {children}
    </button>
  );
}; 