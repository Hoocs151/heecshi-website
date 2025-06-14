import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import NavBarItem from './NavBarItem';

const NavBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const [commandActive, setCommandActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    let buttonRef = useRef(); 

    useEffect(() => {
        if (currentPath === "/commands") {
            setCommandActive(true);
        } else {
            setCommandActive(false);
        }
    }, [currentPath]);  

    useEffect(() => {
        let handler = (e)=>{
            if(!buttonRef.current.contains(e.target)){
                setDropdownOpen(false)
            }
        };
        document.addEventListener("mouseup", handler);
        return () => document.removeEventListener("mouseup", handler);
    }, []);

    return ( 
        <div className="navBar bg-dark-900/95 backdrop-blur-sm border-b border-primary-500/10">
            <div className='navBarContainer'>
                <Link to='/' className="NavLinkHomeExtra">
                    <div className="navHome hover:text-primary-400 transition-colors">
                        <div className="navHomeImg">
                            <img src="./img/Logos/favicon.png" alt="HeecshiLogo" width="38px" height="38px" className="hover:scale-105 transition-transform"/>
                        </div>
                        <div className="navHomeMainText">
                            Heecshi
                        </div>
                    </div>
                </Link>
                <div className="navButtonContainer">
                    <div className='navButtonButtons'>
                        <Link to='/commands' className="NavLinkExtra">
                            <div className={`navButton bg-dark-800/50 hover:bg-primary-500/20 transition-all ${commandActive ? 'bg-primary-500/20 text-primary-400' : ''}`}>
                                Commands
                            </div>              
                        </Link>  
                        <div className={`navButton bg-dark-800/50 hover:bg-primary-500/20 transition-all ${dropdownOpen ? 'bg-primary-500/20 text-primary-400' : ''}`} onClick={() => setDropdownOpen(!dropdownOpen)} ref={buttonRef}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`dropdownIcon transition-transform ${dropdownOpen ? 'rotate-180 text-primary-400' : ''}`}>
                                <path d="M7 14.5l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <div className={`dropDownMenu ${dropdownOpen ? 'active' : 'inactive'} bg-dark-900/95 backdrop-blur-sm border border-primary-500/10 shadow-lg shadow-primary-500/5`}>
                            <div className='navBarSpacerTop' />
                            <NavBarItem 
                                Type="Internal" 
                                IconURL={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="MenuIcon" viewBox="0 0 16 16">
                                        <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                    </svg>
                                } 
                                itemText="Terms of Service" 
                                URL="/terms-of-service"
                            />
                            <NavBarItem 
                                Type="Internal" 
                                IconURL={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="MenuIcon" viewBox="0 0 16 16">
                                        <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                    </svg>
                                } 
                                itemText="Privacy Policy" 
                                URL="/privacy-policy"
                            />
                            <div className='navBarSpacerBottom' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;