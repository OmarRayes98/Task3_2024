import HeroPages from "../../components/Common/HeroPages/HeroPages";
import "./Properties.css";
import PageHeading from "../../assets/images/page-heading-bg.jpg"
import PropertiesContent from "../../components/Properties/PropertiesContent";
const Properties = () => {
  return (
    <>
    <HeroPages image={PageHeading} path="HOME / PROPERTY" title="PROPERTIES"/>
    <PropertiesContent/>
    </>
  )
}

export default Properties
