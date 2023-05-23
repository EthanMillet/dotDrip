import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CLOTHES } from '../../utils/queries';


const Item = () => {
    const { loading, data } = useQuery(GET_CLOTHES);

    if (loading) {
        return <p>Loading...</p>;
    }

    const clothesItems = data?.clothes || [];

    return (
        <div className="clothes-item">
            {clothesItems.map((clothesItem) => (
                <div key={clothesItem._id}>
                    <h3>{clothesItem.name}</h3>
                    <img src={clothesItem.imageUrl} alt={clothesItem.name}/>
                </div>
            ))}
        </div>
    );
};

export default Item;