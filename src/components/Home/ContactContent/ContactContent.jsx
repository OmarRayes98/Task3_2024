import "./ContactContent.css";
import logoCard from "../../../assets/images/phone-icon.png"
import logoCard2 from "../../../assets/images/email-icon.png"
import CardContact from "../../Common/CardContact/CardContact";
import Form from "../../Form/Form";

const ContactContent = () => {
  return (
    <section className="contact-content">
      <section className="contact-content__left">
        <div className="contact-content__left_map" data-aos="fade-right" data-aos-duration="800">
        <iframe
  src="https://www.google.com/maps/embed?pb=1m10!1m8!1m3!1d53226.573543487284!2d36.29128!3d33.5102!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sus!4v1725033723875!5m2!1sar!2sus"
  width="600"
  height="450"
  style={{ border: 'none' }}
  allowFullScreen=""
  loading="lazy"
/>
        </div>

        <div className="contact-content__left_cards">
            <div>
                <CardContact image={logoCard} text1="0101-010-023-1234" text2="Phone Number" />
            </div>
            <div>
            <CardContact image={logoCard2} text1="info@villa.com" text2="Bussiner Email" />
            </div>
            
        </div>
      </section>

    <section className="contact-content__right" data-aos="fade-left" data-aos-duration="800">
        <Form/>
    </section>
    </section>
  );
}

export default ContactContent
