import logo from '../images/logo-footer.svg';
import '../style/components/_footer.scss'

function Footer () {
    return (
            <footer>
            <img src={logo} className="footer_logo" alt="logo" /> 
            <p className="footer_txt"> © 2020 Kasa. All rights reserved</p>
            </footer>
    )
}
export default Footer
