import "./NavBar.css";
import { navBarData } from "../../../../constants/navbar";
import { NavLink } from "react-router-dom";
import Button from "../../../Common/Button/Button";

/* eslint-disable react/prop-types */
const NavBar = ({toggle, setToggle}) => {

  const handleCloseMenu = ()=>{
  setToggle(false);
  }

    return ( 
    <nav style={{clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}} className="navbar">
    <ul className="navbar-links">

      {
        navBarData.map((link)=>(
        <NavLink 
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        } 
        key={link.id} 
        to={link.path} 
        onClick={handleCloseMenu}
        end
        >
          {link.title}
        </NavLink>
        ))
      }

      <Button text={"Scheduale a vist"} withIcon={true} styleClass={"navbar-link"} />

    </ul>
  </nav> 
  
);
}
 
export default NavBar;