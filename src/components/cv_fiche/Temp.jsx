import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Competance from './views/Competance';
import Home from './views/Home';
import Formation from './views/Formation';
import Experience from './views/Experiance';
import Langues from './views/Langues';
import CentreIntert from './views/CentreIntert';



const Temp = ({ id }) => {
    return (
        <div id={id}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/compentence" element={<Competance />}/>
                <Route path="/formation"  element={<Formation />} />
                <Route path="/expriance" element={<Experience />}/>
                <Route path="/langues" element={<Langues />}/>
                <Route path="/centre-interet" element={<CentreIntert />}/>
            </Routes>
        </div>
    );
};

export default Temp;