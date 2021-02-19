import NavLinks from './NavLinks'

function Header(){
    return(
        <header className="header">
            <div className="logo">
                JOSEPH <b>RICHEY<span className="smaller">.TECH</span></b>
            </div>

            <div className="right-side">
                <NavLinks />
            </div>
        </header>
    )
}

export default Header;