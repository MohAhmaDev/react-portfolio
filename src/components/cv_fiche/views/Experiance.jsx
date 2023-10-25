import React, { useState } from 'react';
import GeneraleBanner from '../components/GeneraleBanner';

const Experience = () => {

    const [isChange, setIsChange] = useState(false);

    const toggleChange = () => {
        setIsChange(c => !c);
    }

    return (
        <GeneraleBanner page={2}>
            <div className="contain-content-inform container-cardSH" >
                <div className="containerL02">
                    <div  classNameName={`navigationL02 ${isChange ? 'change' : ''}`}>
                        <ul>
                            <li>
                                <a href="#">
                                    <span className="iconeL02"><i className="fas fa-code-branch"></i></span>
                                    <span className="titleL02"> 3 mois dans une entreprise de télécomunication </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="iconeL02"><i className="fas fa-code-branch"></i></span>
                                    <span className="titleL02"> job d'été en tous genre </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="iconeL02"><i className="fas fa-code-branch"></i></span>
                                    <span className="titleL02"> freelance creation application et site web </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="iconeL02"><i className="fas fa-code-branch"></i></span>
                                    <span className="titleL02">projet creation d'une application de
                                    gesion des filiales d'un groupe et d'un datawarehouse </span>
                                </a>
                            </li>
        
                        </ul>
                    </div>
                    <div classNameName={`toggleL02 ${isChange ? 'change' : ''}`}
                        onClick={() => toggleChange()}
                    ></div>
                </div>
            </div>
        </GeneraleBanner>
    );
};

export default Experience;