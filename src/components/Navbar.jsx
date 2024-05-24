import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav'>
            {/* NavLink adds class "active" to the one where the "to" value matches the current URL, you can then use that class to add your own styling */}
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'store'}>Store</NavLink>
        </nav>
    );
};
export default Navbar;
