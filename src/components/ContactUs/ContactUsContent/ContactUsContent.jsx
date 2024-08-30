import CardContact from "../../Common/CardContact/CardContact";
import "./ContactUsContent.css";
import logoCard from "../../../assets/images/phone-icon.png"
import logoCard2 from "../../../assets/images/email-icon.png"
import Form from "../../Form/Form";

const ContactUsContent = () => {
  return (
    <>
    <section className="contact__content">
        
    <section className="contact__content_left">

    <div className="contact__content_left_info">

                <p className="contact__content_left_title">
                    CONTACT US
                </p>
                <h2 className="contact__content_left_subtitle">
                    Get In Touch With Our Agent
                </h2>
    </div>

    <p className="contact__content_left__details">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type
    specimen book.
    </p>

    <div className="contact__content_left__cards">
                <CardContact image={logoCard} text1="0101-010-023-1234" text2="Phone Number" />
                <CardContact image={logoCard2} text1="info@vila.com" text2="Bussines Email" />
    </div>


    </section>

    <section className="contact__content_right">

        <Form/>

    </section>

    </section>

    <section className="contact__content_map">
    <iframe
  src="https://www.google.com/maps/embed?pb=1m10!1m8!1m3!1d53226.573543487284!2d36.29128!3d33.5102!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sus!4v1725033723875!5m2!1sar!2sus"
  width="600"
  height="450"
  style={{ border: 'none' }}
  allowfullscreen=""
  loading="lazy"
/>
    </section>
    </>
  )
}

export default ContactUsContent
