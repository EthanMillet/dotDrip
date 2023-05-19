import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Sidebar = () => {
    return (
        <div className='nav'>

            <div className='side-bar'>
                <Link className='button' to='/'>
                    <span>HOME</span>
                </Link>
                <Link className='button' to='/'>
                    <span>WARDROBE</span>
                </Link>
                <Link className='button' to='/'>
                    <span>CREATE</span>
                </Link>
                <Link className='button' to='/'>
                    <span>PROFILE</span>
                </Link>
                <Link className='button' to='/'>
                    <span>CONTACT</span>
                </Link>
            </div>

            <header className='header'>
                <div className='header'>
                    <input className='search' default='SEARCH...'></input>
                    <button className='login'>Login</button>
                </div>
            </header>
            
        </div>
    )
}

export default Sidebar;