import Logo from '../../assets/logo-footer.svg'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="Logo Kasa" className="footer-logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer