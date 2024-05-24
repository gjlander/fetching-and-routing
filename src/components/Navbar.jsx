import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'store'}>Store</NavLink>
        </nav>
    );
};
export default Navbar;
