import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
const location = useLocation();
const navigate = useNavigate();
const isNotHome = location.pathname !== "/";
const navigateToHome = () => {
    navigate('/');
};

return (
    <nav>
    <ul>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/itemdetail/1">Item Detail</Link>
        </li>
        {isNotHome && (
        <li>
            <button onClick={navigateToHome}>Home</button>
        </li>
        )}
    </ul>
    </nav>
);
};

export default NavBar;
