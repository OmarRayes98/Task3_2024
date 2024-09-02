import "./Headr.css";
import { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import { IoMenu , IoClose } from "react-icons/io5";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        //65 is upperBar offseHight
        if (window.scrollY > 65) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
        // console.log(window.scrollY,document.querySelector('.upperbar').offsetHeight,"document.querySelector('.upperbar').offsetHeight")
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const styleScrollHeader = {
      top:'0',
      backgroundColor:'#f6f6f6',
      boxShadow:'0 2px 2px #f6f6f6'
    }

  return (

    <header className="header" style={isScrolled?styleScrollHeader:null}>
        <h2 className="header__logo">
            villa
        </h2>

        <NavBar toggle={toggle} setToggle={setToggle} />

        <div onClick={() => setToggle((prev) => !prev)} className="header__burger">
        
        {toggle ? (
          <IoClose/>
        ) : (
          <IoMenu/>
        )}
        </div>

    
    </header>


  )
}

export default Header
