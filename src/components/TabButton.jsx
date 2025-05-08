import React from 'react'

export const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active 
        ? 'text-white border-b border-amber-500'
        : 'text-[#ADB7BE]';
    return (
        <button onClick={selectTab}>
            <p className={`mr-2 font-semibold hover:text-white ${buttonClasses}`}>
                {children}       
        </p>
        </button> 

  )
}

