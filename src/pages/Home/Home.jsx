import "./Home.css";
import Banner from "../../components/Home/Banner/Banner";
import Container from '../../components/Common/Container/Container'
import FeaturedSection from "../../components/Home/FeaturedSection/FeaturedSection";
import CardVideo from "../../components/Home/CardVideo/CardVideo";
import HeadingTmage from "../../components/Home/HeadingImage/HeadingTmage";
import VideoContent from "../../components/Home/VideoContent/VideoContent";
import FrameImage from "../../assets/images/video-frame2.jpg";
import contactImage from "../../assets/images/contact-bg.jpg";

import BestDeal from "../../components/Common/BestDeal/BestDeal";
import PropetiesSection from "../../components/Home/PropetiesSection/PropetiesSection";
import ContactContent from "../../components/Home/ContactContent/ContactContent";

const Home = () => {


  return (
    <>
    <Banner/>
    <Container>
      <FeaturedSection/>
    </Container>
    
    <section className="float-container">
    <HeadingTmage image={FrameImage} title="video view" subTitle="get closer video & different feeling"/>
    <VideoContent/>
    </section>

    <Container>
    <section className="video-content__cards">
        <CardVideo number="34" title="building" subTitle="finished now"/>
        <CardVideo number="12" title="years" subTitle="experince"/>
        <CardVideo number="24" title="awwards" subTitle="won 2023"/>
    </section>

    </Container>

    <BestDeal/>
    
    <Container>
    <PropetiesSection/>
    </Container>

    <section className="float-container">
    <HeadingTmage image={contactImage} title="contact us" subTitle="get in touch with our agents"/>
    <ContactContent/>
    </section>


    </>
  )
}

export default Home
