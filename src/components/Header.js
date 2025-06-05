import Logo from "../assets/Logo.svg"
import HamburgerMenu from "../assets/🦆 icon _hamburger menu.svg"
import {useState} from "react";
function Header(){

    const [openNavBar, setNavBar] = useState(false);
    function handleToggle(){
        setNavBar(!openNavBar);
    }

    return(
        <header>
            <nav>
                <img src={Logo} alt="Little Lemon Logo" className="logo" />
                {openNavBar ? (
                    <button className="close-menu" onClick={handleToggle}>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                ) : (
                    <button className="hamburger-menu" onClick={handleToggle}>
                        <img src={HamburgerMenu} alt="Open navigation menu" />
                    </button>
                )}
                <menu className={`side-menu ${openNavBar ? "open" : ""}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                </menu>
            </nav>
        </header>
    );
}

export default Header;