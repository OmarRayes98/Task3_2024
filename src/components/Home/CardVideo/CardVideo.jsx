/* eslint-disable react/prop-types */
import "./CardViedo.css";

const CardVideo = ({number,title,subTitle}) => {
    return (
      <div className="card-video__box">
  
        <span className="card-video__box_number">
          {number}
        </span>
  
        <div className="card-video__info">
          <span>
              {title}
          </span>
          <span>
              {subTitle}
          </span>
        </div>
  
        <div className="card-video__box_circle"></div>
      </div>
    )
  }
  
  export default CardVideo
  