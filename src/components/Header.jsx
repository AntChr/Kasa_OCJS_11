import { NavLink } from 'react-router-dom'
import logo from '../images/logo.svg';
import '../style/components/_header.scss'


function Header () {
    return (
            <header>
                <div className='Header_logo'>
                    <img src={logo} alt="logo" />
                </div>
            <nav>
                <NavLink className='Header_Accueil' activeClassName='active' to="/">Accueil</NavLink>
                <NavLink className='Header_Apropos' activeClassName='active' to="/apropos">À propos</NavLink>
            </nav>
            </header>
    )
}
export default Header
