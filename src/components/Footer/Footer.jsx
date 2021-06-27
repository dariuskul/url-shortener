import './footer.css';
import facebook from '../../assets/icon-facebook.svg';
import instagram from '../../assets/icon-instagram.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import twitter from '../../assets/icon-twitter.svg';
const Footer = () => {
    return(
        <footer>
            <div className="footer__wrapper">
                <div className="footer__webrepresentation">
                    <h3>Shortly</h3>
                </div>
                <div className="footer__links">
                    <ul>
                        <li>Features</li>
                        <li>Link shortening</li>
                        <li>Branded links</li>
                        <li>Analytics</li>
                    </ul>
                    <ul>
                        <li>Resources</li>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Our team</li>
                        <li>Carrers</li>
                        <li>Contact</li>
                    </ul>

                 <div className="social__icons">
                     <img src={facebook} alt="facebook icon"/>
                     <img src={pinterest} alt="pinterest icon" />
                     <img src={instagram} alt="instagram icon" />
                     <img src={twitter} alt="twitter icon" />
                 </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;