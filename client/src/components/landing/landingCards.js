import React, { useState } from 'react';

const LandingCards = ({ onAddClothes }) => {
    const [selectedClothes, setSelectedClothes] = useState([]);

    const handleRemove = (index) => {
        setSelectedClothes((prevSelectedClothes) =>
            prevSelectedClothes.filter((_, i) => i !== index)
        );
    };

    const renderCards = () => {
        const columns = [];
        for (let col = 0; col < 4; col++) {
            const rows = [];
            for (let row = 0; row < 2; row++) {
                const index = row * 4 + col;
                if (index < selectedClothes.length) {
                    rows.push(
                        <div key={index} className="card" style={{ width: '300px' }}>
                            <p>{selectedClothes[index]}</p>
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    );
                } else {
                    rows.push(
                        <div key={index} className="empty-card" style={{ width: '300px' }}></div>
                    );
                }
            }
            columns.push(
                <div key={col} className="card-column">
                    {rows}
                </div>
            );
        }
        return columns;
    };

    return (
        <div>
            <div className="grid-container">{renderCards()}</div>
            <button onClick={() => onAddClothes(selectedClothes)}>Add to Outfit</button>
        </div>
    );
};

export default LandingCards;
