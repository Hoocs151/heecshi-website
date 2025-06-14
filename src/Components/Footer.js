import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="footer bg-dark-900/50 backdrop-blur-sm">
            <div className="footerContentContainer">
                <div className="leftContentContainer">
                    <div className="logoImg">
                        <img rel="prefetch" src="./img/Logos/favicon.png" alt="HeecshiLogo" width="45px" height="45px"/>
                    </div>  
                    <div className="logoText">
                        The best free and simple Discord bot for your server
                    </div>
                    <div className="copyrightContent">
                        Copyright © {new Date().getFullYear()} All rights reserved
                    </div>
                </div>
                <div className="LCContainer">
                    <div className="linkColumn" id='Space'>
                        <div className="LCTitle">
                            Heecshi
                        </div>
                        <div className="LCLinkContainer">
                            <div className='LCLinkDiv'>
                                <Link to="/terms-of-service" id='LC' className='GenericLinkDeco group'>
                                    <span className="relative">
                                        Terms of Service
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </div>
                            <div className='LCLinkDiv'>
                                <Link to="/privacy-policy" id='LC' className='GenericLinkDeco group'>
                                    <span className="relative">
                                        Privacy Policy
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </div>
                            <div className='LCLinkDiv'>
                                <Link to="/discord" id='LC' className='GenericLinkDeco group'>
                                    <span className="relative">
                                        Support Server
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="linkColumn">
                        <div className="LCTitle">
                            Links
                        </div>
                        <div className="LCLinkContainer">
                            <div className='LCLinkDiv'>
                                <a href="https://github.com/OribiaDev/" target="_blank" rel="noopener noreferrer" id='LC' className='GenericLinkDeco group'>
                                    <span className="relative">
                                        GitHub
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
                                    </span>
                                </a>
                            </div>
                            <div className='LCLinkDiv'>
                                <a href='mailto:support@oribia.dev' id='LC' className='GenericLinkDeco group'>
                                    <span className="relative">
                                        Contact
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;