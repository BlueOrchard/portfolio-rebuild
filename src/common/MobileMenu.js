import NavLinks from "./NavLinks";
import { useState } from 'react'

function MobileMenu(){
    const [showMenu, setshowMenu] = useState(false)

    function toggleMenu(){
        setshowMenu(!showMenu)
    }

    return(
        <div className={"mobile-menu " + (showMenu ? "visible" : "hidden")}>
            <div className="hamburger-menu" onClick={() => toggleMenu()}>
                {showMenu &&
                    <i className="fas fa-times"></i>
                }

                {!showMenu &&
                    <i className="fas fa-bars"></i>
                }
            </div>

            <div className="links" onClick={() => toggleMenu()}>
                <NavLinks/>
            </div>
        </div>
    )
}

export default MobileMenu;