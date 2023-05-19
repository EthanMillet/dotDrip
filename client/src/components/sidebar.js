import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Sidebar = () => {
    return (
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
    )
}

export default Sidebar;