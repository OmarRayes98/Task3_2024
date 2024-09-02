import './BestDeal.css'
import Button from '../Button/Button'
import appartmentImage from "../../../assets/images/deal-01.jpg";
import penthouseImage from "../../../assets/images/deal-02.jpg";
import villaImage from "../../../assets/images/deal-03.jpg";
import { Fragment, useState } from 'react';


const BestDeal = () => {

    const  [isActiveBtnIndex,setIsActiveBtnIndex]= useState(2)
    


    const arrayBestDeal = [
        {
            id:1,
            image:appartmentImage,
            titleButton:"Appartment"
        },
        {
            id:2,
            image:villaImage,
            titleButton:"Villa House"
        },
        {
            id:3,
            image:penthouseImage,
            titleButton:"Penthouse"
        }
    ]

    const objectStyleActive ={
        backgroundColor:'var(--main-color)'
    }

    const handleActive = (index)=>{
        setIsActiveBtnIndex(index)
    }

  return (
    <section className="Deal">
      <div className="Deal__content">
        <div className="Deal__content_title">
          <span>Best Deal</span>

          <h2>Find Your Best Deal Right Now!</h2>
        </div>
        <div className="Deal__btns">
          {arrayBestDeal.map((item, index) => (
            <Fragment key={item.id}>
              <Button
                text={item.titleButton}
                withIcon={false}
                hasClass={"Deal__btn_customize"}
                objectStyleActive={
                isActiveBtnIndex === index ? objectStyleActive : null}
                onClick={handleActive}
                index={index}
                
              />
            </Fragment>
          ))}
        </div>
      </div>
      <div className="Deal__container">
        <div className="Deal__container_left">
          <div className="items">
            <div className="item">
              <h6>185 m2</h6>
              <p>Total Flat Space</p>
            </div>

            <div className="item">
              <h6>26th</h6>
              <p>Floor number</p>
            </div>

            <div className="item">
              <h6>4</h6>
              <p>Number of rooms</p>
            </div>

            <div className="item">
              <h6>Yes</h6>
              <p>Parking Available</p>
            </div>

            <div className="item">
              <h6>Bank</h6>
              <p>Payment Process</p>
            </div>
          </div>
        </div>

        <div className="Deal__container_middle">
          <img src={arrayBestDeal[isActiveBtnIndex].image} alt="property" />
        </div>

        <div className="Deal__container_right">
          <h6>Extra Info About Property</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod
            tempor pack incididunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod
            tempor pack incididunt.
          </p>
          <Button text="Schedule a visit" styleClass="width" withIcon={true} />
        </div>
      </div>
    </section>
  );
}

export default BestDeal