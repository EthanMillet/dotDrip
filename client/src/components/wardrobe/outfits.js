import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';

const UserFits = () => {
    const { loading, error, data } = useQuery(GET_USER);

    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`;

    console.log(data.user.outfits)
    console.log(data.user.clothes)
    return (
        <div className='outfitTab'>
           {data.user.outfits.map((fit) => (
                <div key={fit._id} >
                    <h3>{fit.item1.name}</h3>
                    <img src={fit.item1.imageUrl} alt={fit.item1.name}/>

                    <h3>{fit.item2.name}</h3>
                    <img src={fit.item2.imageUrl} alt={fit.item2.name}/>

                    <h3>{fit.item3.name}</h3>
                    <img src={fit.item3.imageUrl} alt={fit.item3.name}/>

                    <h3>{fit.item4.name}</h3>
                    <img src={fit.item4.imageUrl} alt={fit.item4.name}/>

                    <h3>{fit.item5.name}</h3>
                    <img src={fit.item5.imageUrl} alt={fit.item5.name}/>

                    <h3>{fit.item6.name}</h3>
                    <img src={fit.item6.imageUrl} alt={fit.item6.name}/>

                    <h3>{fit.item7.name}</h3>
                    <img src={fit.item7.imageUrl} alt={fit.item7.name}/>
                </div>
            ))}
        </div>
    );

};

export default UserFits;