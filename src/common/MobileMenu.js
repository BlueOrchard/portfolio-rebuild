import NavLinks from "./NavLinks";
import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition, popIn } from "../util/animations";
import Hamburger from 'hamburger-react'

function MobileMenu(){
    const [showMenu, setshowMenu] = useState(false)

    function toggleMenu(){
        setshowMenu(!showMenu)
    }

    return(
        <div className={"mobile-menu " + (showMenu ? "visible" : "hidden")}>
            <div className="hamburger-menu" onClick={() => toggleMenu()}>
                <Hamburger toggled={showMenu} size={25} />
            </div>

            <AnimatePresence>
                {showMenu &&
                    <motion.div 
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={popIn}
                        transition={pageTransition}
                        className="links" 
                        onClick={() => toggleMenu()}>
                            <NavLinks/>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default MobileMenu;