import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { GET_OUTFITS } from '../../utils/queries';

const LandingCard = () => {

    const { loading, error, data } = useQuery(GET_OUTFITS);

    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`;


    return (
        <div>
            {data.outfits.map((outfits) => (
            <div key={outfits._id} className="card" style={{ width: '300px', height: 'auto'} }>
                <h2>{outfits.name}</h2>
                <h2>{outfits.item1.name}</h2>
                <img src={outfits.item1.imageUrl} alt="Logo"/>
                <button  onClick={() => {window.location.replace(outfits.item1.itemUrl)}}>See Product</button>

                <h2>{outfits.item2.name}</h2>
                <img src={outfits.item2.imageUrl} alt="Logo"/>
                <button  onClick={() => {window.location.replace(outfits.item2.itemUrl)}} target="_blank">See Product</button>

                <h2>{outfits.item3.name}</h2>
                <img src={outfits.item3.imageUrl} alt="Logo"/>
                <button  onClick={() => {window.location.replace(outfits.item3.itemUrl)}} target="_blank">See Product</button>

                <h2>{outfits.item4.name}</h2>
                <img src={outfits.item4.imageUrl} alt="Logo"/>
                <button  onClick={() => {window.location.replace(outfits.item4.itemUrl)}} target="_blank">See Product</button>

                <h2>{outfits.item5.name}</h2>
                <img src={outfits.item5.imageUrl} alt="Logo"/>
                <button  onClick={() => {window.location.replace(outfits.item5.itemUrl)}} target="_blank">See Product</button>

                <h2>{outfits.item6.name}</h2>
                <img src={outfits.item6.imageUrl} alt="Logo"/>
                <button  onClick={() => {window.location.replace(outfits.item6.itemUrl)}} target="_blank"> See Product</button>

                <h2>{outfits.item7.name}</h2>
                <img src={outfits.item7.imageUrl} alt="Logo"/>
                <button  onClick={() => {window.location.replace(outfits.item7.itemUrl)}} target="_blank">See Product</button>

        </div>
            ))}

        </div>
    );
};

export default LandingCard;
