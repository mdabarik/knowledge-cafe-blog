import profileImage from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex flex-row justify-between border border-b-grey-400 my-4'>
            <h1 className='text-6xl text-center'>Knowledge Cafe</h1>
            <img src={profileImage} alt='Image' />
        </header>
    );
}

export default Header;