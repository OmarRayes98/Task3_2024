import { Fragment } from "react";
import Button from "../Common/Button/Button";
import "./PropertiesContent.css";
import CardProperty from "../Common/CardProperty/CardProperty";

const PropertiesContent = () => {

    const arrayBestDeal = [
        {
            id:0,
            titleButton:"Show All"
        },
        {
            id:1,
            titleButton:"Appartment"
        },
        {
            id:2,
            titleButton:"Villa House"
        },
        {
            id:3,
            titleButton:"Penthouse"
        }

    ]






  return (
    <>
    <section className="properties-page__btns">
        {
            arrayBestDeal.map((item)=>(
                <Fragment key={item.id}>
                <Button
                  text={item.titleButton}
                  withIcon={false}
                  hasClass={"Deal__btn_customize"}
                />
                </Fragment>
            ))
        }
    
    </section>

    <section className="properties-page__cards">
       <CardProperty/>
        <CardProperty/>
        <CardProperty/>
        <CardProperty/>
        <CardProperty/>
        <CardProperty/>
    </section>

    <section className="properties-page__pagination">
    <span>
    1
    </span>
    <span>
    2
    </span>
    <span>
    3
    </span>
    <span>
    &gt;&gt;
    </span>
    </section>
    </>
  )
}

export default PropertiesContent
