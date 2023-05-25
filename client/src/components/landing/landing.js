import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingCards from './landingCards';

const Landing = () => {
    const [outfit, setOutfit] = useState({
        clothes: [],
    });

    const handleAddClothes = (clothes) => {
        setOutfit((prevOutfit) => ({
            ...prevOutfit,
            clothes: [...prevOutfit.clothes, ...clothes],
        }));
    };

    return (
        <div className="landing">
            <div className="landing-header">
                <h1>Look At All These Outfits</h1>
            </div>
            <LandingCards onAddClothes={handleAddClothes} />
        </div>
    );
};

export default Landing;
