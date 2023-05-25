import Outfits from './outfits.js';
import Clothes from './clothes.js';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CLOTHES } from '../../utils/mutations';

const Profile = () => {

        const [formState, setFormState] = useState({ name: '', itemUrl: '', imageUrl: ''});
        const [addOutfit] = useMutation(ADD_CLOTHES);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
        await addOutfit({
            variables: { 
                name: formState.name, 
                itemUrl: formState.itemUrl, 
                imageUrl: formState.imageUrl },
            });

            window.location.reload();
            console.log('Added Clothing')
        } catch (e) {
            console.log(e);
        }
        };
    
        const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
        };
    return (
        <div className='profile'>
        <h1>Your Wardrobe</h1>
        <h2>Outfits</h2>
        <Outfits/>
        <h2>Clothes</h2>
        <Clothes/>
        <h2>Add Clothing</h2>
        <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
            <input
                    placeholder="Clothings Name"
                    name="name"
                    type="name"
                    id="name"
                    onChange={handleChange} />
        <label htmlFor="name">Name</label>
            <input
                    placeholder="Items URL"
                    name="itemUrl"
                    type="itemUrl"
                    id="itemUrl"
                    onChange={handleChange} />
        <label htmlFor="name">Name</label>
            <input
                    placeholder="Image URL"
                    name="imageUrl"
                    type="imageUrl"
                    id="imageUrl"
                    onChange={handleChange} />
        <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Profile;