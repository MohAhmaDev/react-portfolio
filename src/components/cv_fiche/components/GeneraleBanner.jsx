import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context';

const GeneraleBanner = ({ children, page }) => {

   const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className='banner'>
            <div className={`contain-Pro ${isDarkMode ? 'dark' : ''}`}>
                <div className="contain-content">
                    <div className="contain-menu-bar">
                        <ul className="sciL">
                            <li id={`${page === 1 ? 'rubrique' : ''}`}> <Link to={`/`}> <span className="menu-sp">Résume</span>  </Link> </li>
                            <li id={`${page === 2 ? 'rubrique' : ''}`}> <Link to={`/expriance`}> <span className="menu-sp">Expérience</span>  </Link> </li>
                            <li id={`${page === 3 ? 'rubrique' : ''}`}> <Link to={`/formation`}> <span className="menu-sp">Formation</span>  </Link> </li>
                            <li id={`${page === 4 ? 'rubrique' : ''}`}> <Link to={`/compentence`}> <span className="menu-sp">Compétance</span>  </Link> </li>
                            <li id={`${page === 5 ? 'rubrique' : ''}`}> <Link to={`/langues`}> <span className="menu-sp">Langues</span>  </Link> </li>
                            <li id={`${page === 6 ? 'rubrique' : ''}`}> <Link to={`/centre-interet`}> <span className="menu-sp">Centre d'interet</span>  </Link> </li>
                            <li> 
                                <a> <span className="menu-sp">Divers</span>  </a> 
                            </li>
                        </ul>                     
                    </div>  
                    { children }
                </div>
            </div>
        </div>

    );
};

export default GeneraleBanner;