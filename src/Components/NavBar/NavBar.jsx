import { NavLink } from "react-router-dom";
import './NavBar.css'
import Logo from '/images/Logo_Magi_Home.png'

export default function NavBar(props) {
    console.log(props.position)
    return (

        <nav className="nav-bar" style={{position:props.position}}>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="links">
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/products'>Produits</NavLink>
                <NavLink to='/Nouveautés'>Nouveautés</NavLink>
                <NavLink to='/about'>Notre Entreprise</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                
            </div>
        </nav>

    )
}
