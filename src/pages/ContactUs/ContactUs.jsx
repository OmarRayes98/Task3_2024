import "./ContactUs.css";
import HeroPages from "../../components/Common/HeroPages/HeroPages";
import Container from "../../components/Common/Container/Container";

import PageHeading from "../../assets/images/page-heading-bg.jpg"
import ContactUsContent from "../../components/ContactUs/ContactUsContent/ContactUsContent";

const ContactUs = () => {
  return (
    <>
    <HeroPages image={PageHeading} path="HOME / CONTACT" title="CONTACT"/>

    <Container>
    <ContactUsContent/>
    </Container>

    </>
  )
}

export default ContactUs
