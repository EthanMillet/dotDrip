import Outfits from './outfits.js';
import Clothes from './clothes.js';

const Profile = () => {
    return (
        <>
            <h1>Your Wardrobe</h1>
            <Outfits />
            <h1>Your Items</h1>
            <Clothes />
        </>
    )
}

export default Profile;