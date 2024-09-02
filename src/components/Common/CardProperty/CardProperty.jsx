/* eslint-disable react/prop-types */
import "./CardProperty.css";
import Button from "../Button/Button";


const CardProperty = ({type,price,text,image,category,details}) => {
  return (
    <div className="card-property">

        <img src={image} alt={category} />
        <div className="card-property_type">
            <span>
                {type}
            </span>
            <span>
                {price}
            </span>
        </div>
        <h3 className="card-property_text">
        {text}
        </h3>

        <div className="card-property_tags">
            {
                details.map((item,index)=>(
                <h4 key={index}>

                    {item.title}
                <span>
                    {item.count}
                </span>
               </h4>
                ))
            }

        </div>

        <div className="card-property_line">

        </div>

        <Button
                text={"Schduale a visit"}
                withIcon={false}  
        />


    </div>
  )
}

export default CardProperty
