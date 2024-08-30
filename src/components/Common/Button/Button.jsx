/* eslint-disable react/prop-types */
import "./Button.css";
import { GrFormSchedule } from "react-icons/gr";

const Button = ({text,withIcon , hasClass,objectStyleActive,onClick,index}) => {


  const handleClick = ()=>{
    onClick(index)
  }

  return (
    <button className={`button ${hasClass}`} style={objectStyleActive} onClick={handleClick}>

    {withIcon && <span className="button-icon"><GrFormSchedule /></span>}
    
    <span className="button-label">{text}</span>
  </button>
  )
}

export default Button
