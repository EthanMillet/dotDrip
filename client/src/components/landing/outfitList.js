import React from 'react';
import Card from './landingCards.js';

const OutfitList = ({ outfits }) => {
  return (
    <div className="outfit-list">
      {outfits.map((outfit) => (
        <Card key={outfit._id} outfit={outfit} />
      ))}
    </div>
  );
};

export default OutfitList;