import React from 'react';
import GeneraleBanner from '../components/GeneraleBanner';

const CentreIntert = () => {
    return (
        <GeneraleBanner page={6}>
            <div className="contain-content-inform">
                <div className="inform-part2">
                    <div className="container-st">
                        <h2> Mes centre d'intéret </h2>
                        <ul className="fa-ul">
                            <li><span className="fa-li"><i className="fas fa-language"></i></span> Sport </li>
                            <li><span className="fa-li"><i className="fas fa-language"></i></span> Musique, films </li>
                            <li><span className="fa-li"><i className="fas fa-language"></i></span> Lécture, jeux vidéo </li>
                        </ul>
                    </div>
                </div>
            </div>
        </GeneraleBanner>
    );
};

export default CentreIntert;