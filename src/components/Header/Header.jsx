import profileImage from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex flex-row justify-between'>
            <h1 className='text-6xl text-center'>Hello World</h1>
            <img src={profileImage} alt='Image' />
        </header>
    );
}

export default Header;