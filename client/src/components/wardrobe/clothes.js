import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';



const Item = () => {
    const { loading, error, data } = useQuery(GET_USER);

    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`;


    return (
        <div className="clothes-item">
            {data.user.clothes.map((clothesItem) => (
                <div key={clothesItem._id}>
                    <h3>{clothesItem.name}</h3>
                    <img src={clothesItem.imageUrl} alt={clothesItem.name}/>
                </div>
            ))}
        </div>
    );
};

export default Item;