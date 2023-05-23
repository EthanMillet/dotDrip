import React from 'react';
import ReactDom from 'react-dom/client'
import '../create.css';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_OUTFIT } from '../utils/mutations';



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
        <form onSubmit={handleFormSubmit}>
            <label>Name</label>
            <select name="languages" id="lang">
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select>
            <label>Top</label>
            <input className = "ws-card"
                                placeholder="Top"
                                name="item1"
                                type="item1"
                                id="item1"
                                onChange={handleChange}/>
            <label>Bottoms</label>
            <input className = "ws-card"
                                placeholder="Bottoms"
                                name="item2"
                                type="item2"
                                id="item2" 
                                onChange={handleChange}/>
            <label>Footwear</label>
            <input className = "ws-card"
                                placeholder="Footwear"
                                name="item3"
                                type="item3"
                                id="item3"
                                onChange={handleChange} />
            <label>accessory1</label>
            <input className = "ws-card"
                                placeholder="Accessory"
                                name="item4"
                                type="item4"
                                id="item4" 
                                onChange={handleChange}/>
            <label>accessory2</label>
            <input className = "ws-card" 
                                placeholder="Accessory"
                                name="item5"
                                type="item5"
                                id="item5"
                                onChange={handleChange}/>
            <label>accessory3</label>
            <input className = "ws-card"
                                placeholder="Accessory"
                                name="item6"
                                type="item6"
                                id="item6" 
                                onChange={handleChange}/>
            <label>accessory4</label>
            <input className = "ws-card"
                                placeholder="Accessory"
                                name="item7"
                                type="item7"
                                id="item7"
                                onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
        </div>

    );
}


export default Workstation