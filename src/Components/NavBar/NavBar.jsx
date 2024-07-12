import { NavLink } from "react-router-dom";
import './NavBar.css'
import Logo from '/images/Logo_Magi_Home.png'

export default function NavBar(props) {
    console.log(props.position)
    return (

        <nav className="nav-bar navbar" style={{position:props.position,right:props.left}}>
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
               <li><NavLink to='/'>Accueil</NavLink></li> 
               <li><NavLink to='/products'>Produits</NavLink></li>
               <li><NavLink to='/Nouveautés'>Nouveautés</NavLink></li>
               <li><NavLink to='/about'>Notre Entreprise</NavLink></li>
               <li><NavLink to='/contact'>Contact</NavLink></li> 
             </ul>
             
         </div>
        </nav>

    )
}
