import FeaturedInfo from "../../Common/FeaturedInfo/FeaturedInfo";
import "./PropertiesDetailsContent.css";
import image from "../../../assets/images/deal-03.jpg";
import Accordion from "../../Common/Accordion/Accordion";


const PropertiesDetailsContent = () => {
  return (
    <section className="properties_details__content">
      
      <section className="properties_details__content_left">

        <img src={image} alt="property" />

        <span className="properties_details__content_left__tag">Appartment</span>

        <h2 className="properties_details__content_left__h">
            24 new Street Miami ,OR 24560
        </h2>


        <div className="properties_details__content_left__line">

        </div>

        <p className="properties_details__content_left__p">
        Lorem 1Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.

        </p>

        <p className="properties_details__content_left__p">
        Lorem 2 Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.

        </p>

        <section className="properties_details__content_left__accordion">
                <Accordion/>
                </section>


      </section>

      <section className="properties_details__content_right">
      <FeaturedInfo/>
      </section>     
    
    </section>
  )
}

export default PropertiesDetailsContent
