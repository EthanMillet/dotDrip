import React from 'react';
import '../create.css';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_OUTFIT } from '../utils/mutations';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';

function Workstation() {   
    const { loading, error, data } = useQuery(GET_USER);
    console.log(data)

    const [formState, setFormState] = useState({ name: data.user.clothes[0].name, item1:data.user.clothes[0].name, item2:data.user.clothes[0].name, item3:data.user.clothes[0].name, item4:data.user.clothes[0].name, item5:data.user.clothes[0].name, item6:data.user.clothes[0].name, item7:data.user.clothes[0].name });
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


    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`;

    return(
        <div className="workstation">

        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name</label>
            <input
                    placeholder="Outfit Name"
                    name="name"
                    type="name"
                    id="name"
                    onChange={handleChange} />
            <label htmlFor="item1">Top</label>
            <select name="item1" id="item1" onChange={handleChange}>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                    {clothesItem.name}
                    </option>))}
            </select>

            <label htmlFor="item2">Bottoms</label>
            <select name="item2" id="item2" onChange={handleChange}>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>

            <label htmlFor="item3">Shoes</label>
            <select name="item3" id="item3" onChange={handleChange}>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>            
            
            <label htmlFor="item4">Accessory</label>
            <select name="item4" id="item4" onChange={handleChange}>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>
            
            <label htmlFor="item5">Accessory</label>
            <select name="item5" id="item5" onChange={handleChange}>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>



            <label htmlFor="item6">Accessory</label>
            <select name="item6" id="item6" onChange={handleChange}>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>

            <label htmlFor="item7">Accessory</label>
            <select name="item7" id="item7" onChange={handleChange}>
                {data.user.clothes.map((clothesItem) => (
                    <option value={clothesItem._id} key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>
            <button type="submit">Submit</button>
        </form>
        </div>

    );
}


export default Workstation