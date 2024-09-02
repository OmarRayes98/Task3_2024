import { Fragment } from "react";
import { cardsData } from "../../../constants/cardsData";
import CardProperty from "../../Common/CardProperty/CardProperty";
import "./PropetiesSection.css";

const PropetiesSection = () => {
  return (
    <section className="properties-section">
    <section className="properties-section_info">
                <p className="properties-section_title" data-aos="fade-up" data-aos-duration="800">
                    Properties
                </p>
                <h2 className="properties-section_subtitle" data-aos="fade-up" data-aos-duration="1000">
                    We Provide the best Property you like
                </h2>
    </section>

    <article className="properties-section_cards" data-aos="fade-up" data-aos-duration="800">
      {
        cardsData.slice(0, 6).map((item)=>(
        <Fragment key={item.id}>
                  <CardProperty
                  {...item}
                  />
        </Fragment>
        ))
      }
    </article>

    </section>
  )
}

export default PropetiesSection
