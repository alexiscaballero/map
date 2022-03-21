import './index.scss'
import Search from '../search';

const Navbar = () => {
    return (
        <header className="navbar-header">
            <div className="navbar-header-left">
                <ul className="navbar">
                    <li>
                        Maps
                    </li>
                </ul>
            </div>
            <div className="navbar-header-mid">
            </div>
            <div className="navbar-header-right">
                <Search/>
            </div>
        </header>
    );
}
export default Navbar;
