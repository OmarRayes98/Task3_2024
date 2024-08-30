/* eslint-disable react/prop-types */
import "./HeadingImage.css";

const HeadingTmage = ({image, title, subTitle}) => {
  return (
    <section className="home__heading-image">

    <img src={image} alt={title}/>

    <div className="home__heading-image_info">
                <p className="home__heading-image_title">
                    {title}
                </p>
                <h2 className="home__heading-image_subtitle">
                    {subTitle}
                </h2>
    </div>
    
    </section>
  )
}

export default HeadingTmage
