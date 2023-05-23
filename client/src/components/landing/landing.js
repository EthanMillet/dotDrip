import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingCards from './landingCards';

const Landing = () => {
    const [outfit, setOutfit] = useState({
        name: '',
        clothes: [],
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setOutfit((prevOutfit) => ({
            ...prevOutfit,
            [name]: value,
        }));
    };

    const handleAddClothes = (clothes) => {
        setOutfit((prevOutfit) => ({
            ...prevOutfit,
            clothes: [...prevOutfit.clothes, clothes],
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform submit logic, such as saving the outfit to the database
        console.log(outfit);
    };

    return (
        <div className="landing">
            <div className="cards-div">
                <h2>Create Outfit</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Outfit Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={outfit.name}
                        onChange={handleChange}
                        required
                    />
                    <LandingCards onAddClothes={handleAddClothes} />
                    <button type="submit">Save Outfit</button>
                </form>
            </div>
        </div>
    );
};

export default Landing;
