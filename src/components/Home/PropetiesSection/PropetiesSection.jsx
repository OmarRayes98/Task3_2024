import CardProperty from "../../Common/CardProperty/CardProperty";
import "./PropetiesSection.css";

const PropetiesSection = () => {
  return (
    <section className="properties-section">
    <section className="properties-section_info">
                <p className="properties-section_title">
                    Properties
                </p>
                <h2 className="properties-section_subtitle">
                    We Provide the best Property you like
                </h2>
    </section>

    <article className="properties-section_cards">
        <CardProperty/>
        <CardProperty/>
        <CardProperty/>
        <CardProperty/>
        <CardProperty/>
        <CardProperty/>
    </article>

    </section>
  )
}

export default PropetiesSection
