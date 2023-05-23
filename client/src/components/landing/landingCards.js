import React, { useState } from 'react';

const LandingCard = ({ image, onRemove }) => {
    return (
        <div className="card" style={{ width: '300px' }}>
            <img src={image} alt="Clothing" />
            <button onClick={onRemove}>Remove</button>
        </div>
    );
};

const LandingCards = ({ onAddClothes }) => {
    const [selectedClothes, setSelectedClothes] = useState([]);

    const handleRemove = (index) => {
        setSelectedClothes((prevSelectedClothes) =>
            prevSelectedClothes.filter((_, i) => i !== index)
        );
    };

    const renderCards = () => {
        const emptyCardCount = 9 - selectedClothes.length;
        const cards = selectedClothes.map((image, index) => (
            <LandingCard
                key={index}
                image={image}
                onRemove={() => handleRemove(index)}
            />
        ));

        for (let i = 0; i < emptyCardCount; i++) {
            cards.push(
                <div key={`empty-card-${i}`} className="empty-card" style={{ width: '300px' }}></div>
            );
        }

        return cards;
    };

    return (
        <div>
            <div className="grid-container">{renderCards()}</div>
        </div>
    );
};

export default LandingCards;
