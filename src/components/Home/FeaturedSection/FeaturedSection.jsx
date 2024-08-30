import "./FeaturedSection.css";
import featureImage from "../../../assets/images/featured.jpg";
import featureIcon from "../../../assets/images/featured-icon.png";
import Accordion from "../../../components/Common/Accordion/Accordion";
import FeaturedInfo from "../../../components/Common/FeaturedInfo/FeaturedInfo";

const FeaturedSection = () => {
  return (
    <section className="featured">
            <div className="featured__image">
                <img src={featureImage} alt="feature" />
                <div className="featured__image_icon">
                <img src={featureIcon} alt="feature Icon" />
                </div>
            </div>

            <div className="featured__content">
                <p className="featured__content_title">
                    Featured
                </p>
                <div className="featured__content_parent">
                <h2 className="featured__content_info">
                    <span>
                    Best
                    </span>
                    <span>
                    Appartement & 
                    </span> 
                    <span>
                    Sea View 
                    </span>
                </h2>

                <section className="accordion-home__parent">
                <Accordion/>
                </section>

                </div>

            </div>

            <FeaturedInfo/>


    </section>
  )
}

export default FeaturedSection
