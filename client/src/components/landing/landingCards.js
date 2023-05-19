import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_OUTFITS } from '../utils/queries';
import { idbPromise } from '../../utils/helpers';

const Card = () => {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(QUERY_OUTFITS);
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
            <img src="" />
        </div>
    )
}