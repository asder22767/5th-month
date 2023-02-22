import footerLogo from "./assets/flogo.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";



export function Footer () {
    return (
        <footer class="footer">
        <div class="container">
            <div class="footer__wrapper dfalc">
                <div class="footer__additional-wrapper dfalc">
                    <a href="./index.html" class="footer__logo">
                        <img src={footerLogo} alt="logo of scoot" class="footer__logo-img" width="107" height="28"/>
                    </a>
                    
                    <ul class="footer__nlist nav-list">
                        <li class="footer__items nav-items">
                            <a href="./index.html" class="nav-link">About</a>
                        </li>
                        
                        <li class="footer__items nav-items">
                            <a href="#" class="nav-link">Location</a>
                        </li>
                        
                        <li class="footer__items nav-items">
                            <a href="#" class="nav-link">Careers</a>
                        </li>
                    </ul>
                </div>
                
                <ul class="footer__posts-list dfalc">
                    <li class="footer__posts-items">
                        <a href="https://www.facebook.com/" class="footer__post-links">
                            <img src={facebook} alt="icon" class="footer__post-icons" width="24" height="24"/>
                        </a>
                    </li>
                    
                    <li class="footer__posts-items">
                        <a href="https://www.twitter.com/" class="footer__post-links">
                            <img src={twitter} alt="icon" class="footer__post-icons" width="24" height="24"/>
                        </a>
                    </li>
                    
                    <li class="footer__posts-items">
                        <a href="https://www.instagram.com/" class="footer__post-links">
                            <img src={instagram} alt="icon" class="footer__post-icons" width="24" height="24"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    )
}