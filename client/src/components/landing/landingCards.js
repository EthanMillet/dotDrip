import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_OUTFITS } from '../../utils/queries';

const Card = ({ outfit }) => {
    const { loading, data, error } = useQuery(GET_OUTFITS);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <div className="card">
            {data.outfits.map((outfit) => {
                <div key={outfit.id}>
                    <h3>{outfit.name}</h3>
                    <div className="image-container">
                        {outfit.item1 && <img src={outfit.item1.imageUrl} alt={outfit.item1.name} />}
                        {outfit.item2 && <img src={outfit.item2.imageUrl} alt={outfit.item2.name} />}
                        {outfit.item3 && <img src={outfit.item3.imageUrl} alt={outfit.item3.name} />}
                        {outfit.item4 && <img src={outfit.item4.imageUrl} alt={outfit.item4.name} />}
                        {outfit.item5 && <img src={outfit.item5.imageUrl} alt={outfit.item5.name} />}
                        {outfit.item6 && <img src={outfit.item6.imageUrl} alt={outfit.item6.name} />}
                        {outfit.item7 && <img src={outfit.item7.imageUrl} alt={outfit.item7.name} />}
                    </div>
                </div>
            })}
        </div>
    );
};

export default Card;