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
    const fitImages = fits.map((fit) => (fit.imageUrl))

    return (
        <div>
            {
                fitImages.map((image) => { return <img src={image} alt={'test'} />})
            }
            {/* {fits.map((fit) => (
                <div key={fit._id}>
                    <h3>{fit.name}</h3>
                    {fit.item1 && <img src={fit.item1.imageUrl} alt={fit.item1.name} />}
                    {fit.item2 && <img src={fit.item2.imageUrl} alt={fit.item2.name} />}
                    {fit.item3 && <img src={fit.item3.imageUrl} alt={fit.item3.name} />}
                    {fit.item4 && <img src={fit.item4.imageUrl} alt={fit.item4.name} />}
                    {fit.item5 && <img src={fit.item5.imageUrl} alt={fit.item5.name} />}
                    {fit.item6 && <img src={fit.item6.imageUrl} alt={fit.item6.name} />}
                    {fit.item7 && <img src={fit.item7.imageUrl} alt={fit.item7.name} />}
                </div>
            ))} */}
        </div>
    );

};

export default UserFits;