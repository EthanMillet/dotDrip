import React from 'react';
import '../create.css';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_OUTFIT } from '../utils/mutations';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';

function Workstation() {
    const [formState, setFormState] = useState({ name: '', item1: '', item2: '', item3: '', item4: '', item5: '', item6: '', item7: '' });
    const [addOutfit] = useMutation(ADD_OUTFIT);

    const handleFormSubmit = async (event) => {
    console.log(formState.item3)
    console.log(data.user.clothes[1].name)
    event.preventDefault();
    try {
    await addOutfit({
        variables: { name: formState.name, item1: formState.item1, item2: formState.item2, item3: formState.item3, item4: formState.item4, item5: formState.item5, item6: formState.item6, item7: formState.item7, },
        });
        console.log('Added Outfit')
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


    const { loading, error, data } = useQuery(GET_USER);

    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`

    return(
        <div >

        <form onSubmit={handleFormSubmit} className="workstation">
            <label className='ws-label' htmlFor="name">Name</label>
            <input
                    placeholder="Outfit Name"
                    name="name"
                    type="name"
                    id="name"
                    onChange={handleChange} />
            <label className='ws-label' htmlFor="item1">Top</label>
            <select className='ws-sel' name="item1" id="item1" onChange={handleChange}>
                <option disabled selected>Select</option>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                    {clothesItem.name}
                    </option>))}
            </select>

            <label className='ws-label' htmlFor="item2">Bottoms</label>
            <select className='ws-sel' name="item2" id="item2" onChange={handleChange}>
            <option disabled selected>Select</option>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>

            <label className='ws-label' htmlFor="item3">Shoes</label>
            <select className='ws-sel' name="item3" id="item3" onChange={handleChange}>
            <option disabled selected>Select</option>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>            
            
            <label className='ws-label' htmlFor="item4">Accessory</label>
            <select className='ws-sel' name="item4" id="item4" onChange={handleChange}>
            <option disabled selected>Select</option>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>
            
            <label className='ws-label' htmlFor="item5">Accessory</label>
            <select className='ws-sel' name="item5" id="item5" onChange={handleChange}>
            <option disabled selected>Select</option>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>



            <label className='ws-label' htmlFor="item6">Accessory</label>
            <select className='ws-sel' name="item6" id="item6" onChange={handleChange}>
            <option disabled selected>Select</option>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>

            <label className='ws-label' htmlFor="item7">Accessory</label>
            <select className='ws-sel' name="item7" id="item7" onChange={handleChange}>
            <option disabled selected>Select</option>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>
            <button className='sub-button' type="submit">Submit</button>
        </form>
        </div>

    );
}


export default Workstation