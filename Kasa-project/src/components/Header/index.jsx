import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="logo Kasa" className="header-logo"/> 
        <nav className="header-nav">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">À Propos</NavLink>
        </nav>
    </header>
  )
}

export default Header