/* eslint-disable react/prop-types */
import "./CardContact.css";

const CardContact = ({image , text1,text2}) => {
  return (
    <div className="contact-content__left_cards_card">
    <img src={image} alt="phone"/>
    <div className="contact-content__left_cards_card__info">
        <span>
        {text1}
        </span>

        <span>
        {text2}
        </span>

    </div>

  </div>
  )
}

export default CardContact
