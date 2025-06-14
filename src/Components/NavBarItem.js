import React from 'react';
import { Link } from 'react-router-dom';

const NavBarItem = ({itemText, URL, Type, IconURL}) => {
    const commonClasses = "NavBarItem group transition-all duration-300 hover:bg-primary-500/10";
    const linkClasses = "NavLinkExtra w-full block";
    const containerClasses = "NavBarInfoContainer flex items-center gap-3 px-4 py-2.5";
    const iconClasses = "MenuIcon text-primary-400 group-hover:text-primary-300 transition-colors duration-300";
    const textClasses = "NavBarTitle text-gray-400 group-hover:text-primary-300 transition-colors duration-300";

    if(Type === "Internal") {
        return ( 
            <div className={commonClasses}>
                <Link to={URL} className={linkClasses}>
                    <div className={containerClasses}>
                        <div className="NavBarIconList transform group-hover:scale-110 transition-transform duration-300">
                            {React.cloneElement(IconURL, { className: iconClasses })}
                        </div>
                        <div className={textClasses}>
                            {itemText}
                        </div> 
                    </div>
                </Link>
            </div>
        );
    }
    
    if(Type === "External") {
        return ( 
            <div className={commonClasses}>
                <a href={URL} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    <div className={containerClasses}>
                        <div className="NavBarIconList transform group-hover:scale-110 transition-transform duration-300">
                            {React.cloneElement(IconURL, { className: iconClasses })}
                        </div>
                        <div className={textClasses}>
                            {itemText}
                        </div> 
                    </div>
                </a>
            </div>
        );
    }

    return null;
}

export default NavBarItem;
