import React from 'react';

import '../create.css';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';


function GetClothes() { 
    
    const { loading, error, data } = useQuery(GET_USER);

    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`;

    return(
        <div className="workstation">
            <label>Top</label>
            <select name="item1" id="item1">
                {data.user.clothes.map((clothesItem) => (
                    <option key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>

            <label>Bottoms</label>
            <select name="item2" id="item2">
                {data.user.clothes.map((clothesItem) => (
                    <option key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>

            <label>Shoes</label>
            <select name="item3" id="item3">
                {data.user.clothes.map((clothesItem) => (
                    <option key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>            
            
            <label>Accessory</label>
            <select name="item4" id="item4">
                {data.user.clothes.map((clothesItem) => (
                    <option key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>
            
            <label>Accessory</label>
            <select name="item5" id="item5">
                {data.user.clothes.map((clothesItem) => (
                    <option key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>



            <label>Accessory</label>
            <select name="item6" id="item6">
                {data.user.clothes.map((clothesItem) => (
                    <option key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>

            <label>Accessory</label>
            <select name="item7" id="item7">
                {data.user.clothes.map((clothesItem) => (
                    <option key={clothesItem._id}>
                        {clothesItem.name}
                    </option>))}
            </select>
        </div>

    );
}


export default GetClothes