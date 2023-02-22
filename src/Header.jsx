import headerLogo from "./assets/hlogo.svg";
import burgerMenu from "./assets/burger-menu.svg"

export function Header () {
    return (
        <header className="header">
        <div className="container">
            <div className="header__wrapper dfalc">
                <div className="header__additional-wrapper dfalc">
                    <div className="header__wrapper-tricky">
                        <ul className="header__list-mob">
                            <li className="header__items-mob">
                                <a href="/" className="header__link-mob">About</a>
                            </li>
                            <li className="header__items-mob">
                                <a href="/" className="header__link-mob">Location</a>
                            </li>
                            <li className="header__items-mob">
                                <a href="/" className="header__link-mob">Careers</a>
                            </li>
                        </ul>

                        <a href="/" className="header__blink link--button">Get Scootin</a>
                    </div>

                    <button className="header__button-burger burger--button">
                        <img className="header__something-amazing" id="myImage" src={burgerMenu} alt="icon" width="20" height="16"/>
                    </button>
                    
                    <a href="./index.html" className="header__logo">
                        <img src={headerLogo} alt="logo of scoot" className="header__logo-img" width="107" height="28"/>
                    </a>
                    
                    <ul className="header__nlist nav-list">
                        <li className="header__items nav-items">
                            <a href="./index.html" className="nav-link">About</a>
                        </li>
                        
                        <li className="header__items nav-items">
                            <a href="/" className="nav-link">Location</a>
                        </li>
                        
                        <li className="header__items nav-items">
                            <a href="/" className="nav-link">Careers</a>
                        </li>
                    </ul>
                </div>
                
                <a href="/" className="header__blink link--button">Get Scootin</a>
            </div>
        </div>
    </header>
    )
}