import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

function Header(){
    return(
        <header className="header">
            <div className="logo">
                <Link to="/">
                    JOSEPH <b>RICHEY<span className="smaller">.TECH</span></b>
                </Link>
            </div>

            <div className="right-side">
                <NavLinks />
            </div>
        </header>
    )
}

export default Header;