import "./VideoContent.css";
import FrameImageContent from "../../../assets/images/video-frame.jpg";
import { FaCirclePlay } from "react-icons/fa6";

const VideoContent = () => {
  return (
    < >
    <section className="video-content__image" data-aos="fade-right" data-aos-duration="800">
        <img src={FrameImageContent} alt="frame video"/>

        <span className="video-content__image_icon">
            <FaCirclePlay/>
        </span>
        <div className="video-content__image_circle"></div>

    </section>
    
    </>
  )
}

export default VideoContent
