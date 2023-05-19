import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Sidebar from './sidebar.js';

const Landing = () => {
    return (
        <div className='landing'>
            <Sidebar />
            <div className='header'>
                <input className='search' default='SEARCH...'></input>
                <Link to='/login'>LOGIN</Link>
            </div>
            <div className='cards-div'>
                
            </div>
        </div>
    )
}

export default Landing;