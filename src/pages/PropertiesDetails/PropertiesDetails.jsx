import "./PropertiesDetails.css";
import PageHeading from "../../assets/images/page-heading-bg.jpg"
import HeroPages from "../../components/Common/HeroPages/HeroPages";
import Container from "../../components/Common/Container/Container";
import BestDeal from "../../components/Common/BestDeal/BestDeal";
import PropertiesDetailsContent from "../../components/PropertiesDetails/PropertiesDetailsContent/PropertiesDetailsContent";

const PropertiesDetails = () => {
  return (
    <>
    <HeroPages image={PageHeading} path="HOME / SINGLE PROPERTY" title="SINGLE PROPERTY"/>

    <Container>
    <PropertiesDetailsContent/>
    </Container>

    <BestDeal/>
    </>
  )
}

export default PropertiesDetails
