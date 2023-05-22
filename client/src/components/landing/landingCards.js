import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { useQuery } from '@apollo/client';
import { GET_OUTFITS } from '../utils/queries';

const Card = ({ outfit }) => {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(GET_OUTFITS);
    const outfitImages = '';

    useEffect(() => {
        if (data) {
            dispatch({
                type: GET_OUTFITS,
                outfits: data.outfits,
            });
            data.forEach((outfit) => {
            });
        } else if (!loading) {

        }
    }, [data, loading, dispatch]);

    return (
        <div className="card">
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
    );
};

export default Card;