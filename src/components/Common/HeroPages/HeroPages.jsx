/* eslint-disable react/prop-types */
import "./HeroPages.css";

const HeroPages = ({image,path,title}) => {
  return (
    <section className="hero-page">
        <img src={image} alt="hero" />

        <p className="hero__path">
            {path}
        </p>
        <h1 className="hero__title">
            {title}
        </h1>
    
    </section>
  )
}

export default HeroPages
