import React from 'react';
import ReactDom from 'react-dom/client'
import '../create.css';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_OUTFIT } from '../utils/mutations';



export default function Workstation() {
    return (
        <body>
            <h1 className='title'>Create an outfit</h1>
            <div className="ws-card">Choose Wisely</div>
        </body>

function Workstation() {
    const [formState, setFormState] = useState({ name: '', item1: '', item2: '', item3: '', item4: '', item5: '', item6: '', item7: '' });
    const [addOutfit, { error, loading }] = useMutation(ADD_OUTFIT);

    const handleFormSubmit = async (event) => {
    console.log(formState.password)
    event.preventDefault();
    try {
    await addOutfit({
        variables: { name: formState.name, item1: formState.item1, item2: formState.item2, item3: formState.item3, item4: formState.item4, item5: formState.item5, item6: formState.item6, item7: formState.item7, },
        });
        if (loading) {
        return (
            <p> Loading </p>)
        }
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
    return(
        <div className="workstation">
        <form>
            <label>Top</label>
            <input className = "ws-card"/>
            <label>Bottoms</label>
            <input className = "ws-card" />
            <label>Footwear</label>
            <input className = "ws-card" />
            <label>accessory1</label>
            <input className = "ws-card" />
            <label>accessory2</label>
            <input className = "ws-card" />
            <label>accessory3</label>
            <input className = "ws-card" />
            <button type="submit">Submit</button>
        </form>
        </div>

    );
}


export default Workstation