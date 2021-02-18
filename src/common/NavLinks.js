import { Link } from 'react-router-dom'

function NavLinks(){
    return(
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default NavLinks