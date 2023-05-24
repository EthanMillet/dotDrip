import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';

const UserFits = () => {
    const { loading, data, error } = useQuery(GET_USER);
    
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }

    const fits = data?.user?.outfits || [];

    return (
        <div>
            {fits.map((fit) => (
                <div key={fit._id}>
                    <h3>{fit.name}</h3>
                    <img src={fit.imageUrl} alt={fit.name}/>
                </div>
            ))}
        </div>
    );

};

export default UserFits;