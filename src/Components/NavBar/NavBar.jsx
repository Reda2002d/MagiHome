import { NavLink } from "react-router-dom";
import './NavBar.css'
import Logo from '/images/Logo_Magi_Home.png'

export default function NavBar(props) {
    console.log(props.position)
    return (

        <nav className="nav-bar navbar" style={{position:props.position}}>
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
        
         <div class="navbar-container container">
             <input type="checkbox" name="" id=""/>
             <div class="hamburger-lines">
                 <span class="line line1"></span>
                 <span class="line line2"></span>
                 <span class="line line3"></span>
             </div>
             <ul class="menu-items">
                 <li><a href="#">Home</a></li>
                 <li><a href="#">About</a></li>
                 <li><a href="#">Category</a></li>
                 <li><a href="#">Menu</a></li>
                 <li><a href="#">Testimonial</a></li>
                 <li><a href="#">Contact</a></li>
             </ul>
             
         </div>
        </nav>

    )
}
