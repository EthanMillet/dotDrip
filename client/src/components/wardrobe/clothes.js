import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';



const Item = () => {
    const { loading, data, error } = useQuery(GET_USER);


    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }

    const clothesItems = data?.user?.clothes || [];


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