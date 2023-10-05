import { NavLink } from "react-router-dom";
function Nav(){
    return(
        <nav>
            <div>
                <ul>
                    <li>
                        <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" aria-current="page" to="/forms">Forms</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
