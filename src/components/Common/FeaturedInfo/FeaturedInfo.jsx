import "./FeaturedInfo.css";
import ItemInfo from "./ItemInfo";
import icon1 from "../../../assets/images/info-icon-01.png"
import icon2 from "../../../assets/images/info-icon-01.png"
import icon3 from "../../../assets/images/info-icon-01.png"
import icon4 from "../../../assets/images/info-icon-01.png"


const FeaturedInfo = () => {
  return (
    <section className="featured__info">
    <div className="featured__info_box">
        <div className="featured__info_card">
        <ItemInfo text="250 m2" subText="Total Flat Space" icon={icon1} />
        </div>
        <div className="featured__info_card">
        <ItemInfo text="Contract" subText="Contract Ready" icon={icon2} />
        </div>
        <div className="featured__info_card">
        <ItemInfo text="Payment" subText="Payment" icon={icon3} titleIcon="Process"/>
        </div>
        <div className="featured__info_card">
        <ItemInfo text="Safety" subText="24/7 Under" icon={icon4} titleIcon="Control"/>
        </div>
    </div>

</section>
  )
}

export default FeaturedInfo
