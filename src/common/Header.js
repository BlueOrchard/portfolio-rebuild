import NavLinks from './NavLinks'

function Header(){
    return(
        <header className="header">
            <div className="logo">

            </div>

            <div className="right-side">
                <NavLinks />
            </div>
        </header>
    )
}

export default Header;