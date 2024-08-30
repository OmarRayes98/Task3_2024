import "./CardProperty.css";
import image from "../../../assets/images/property-01.jpg";
import Button from "../Button/Button";


const CardProperty = () => {
  return (
    <div className="card-property">

        <img src={image} alt="propery" />
        <div className="card-property_type">
            <span>
                Luxry Villa
            </span>
            <span>
                $2.246.00
            </span>
        </div>
        <h3 className="card-property_text">
        18 New Street Miami, OR 98272
        </h3>

        <div className="card-property_tags">
        <h4>

                    Bedrooms:
                <span>
                    8
                </span>
        </h4>

        <h4>
                
                    Bathrooms:
                <span>
                    8
                </span>
        </h4>

        <h4>
                
                Area:
            <span>
                555m2
            </span>
        </h4>

        <h4>
                
                Floor:
            <span>
                3
            </span>
        </h4>

        <h4>
                
                Parking:
            <span>
                6 spots
            </span>
        </h4>
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
