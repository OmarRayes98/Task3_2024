import { Fragment, useRef, useState } from "react";
import Button from "../Common/Button/Button";
import "./PropertiesContent.css";
import CardProperty from "../Common/CardProperty/CardProperty";
import { arrayBestDeal, cardsData } from "../../constants/cardsData";

const PropertiesContent = () => {

    const [menuCategories, setMenuCategories] = useState(cardsData);
    const whichActiveRef = useRef("all");

    /* //here can use useRef instead of useState because when click Filter will will rerender because 
    of menuCategories State so useRef will 
    update and compare eveny if useRef no cause Rerender
    -----------------------------------------
    BestDeal Component also have whichActive but with State because need to reRender 
    there no somethin else to cause rerender of component with value of ref 
    -------------------------------------------
    BestDeal  لم تنجح انشاء فقط ref
    لانها عند تغيير قيمتها لا تسبب اعادة تنفيذ للمكون 
    وبالتالي virual Dom  
    لن تحصل على نسخة محدثة لمقارنتها مع السابقة 
    وبالتالي لن يقوم المكون بانشاء 
    active مع الزر المطلوب */
    


    
    const handleFilterCategory = (categoryType)=>{

        //if click same active button : compoare old with new values , not to continuse the rest code .
        if(categoryType ===  whichActiveRef.current){
            // alert("same Active button")
            return
        }
        
        whichActiveRef.current=categoryType;

        // orginal array for filtering , and store change in another varible
        const filterCards = cardsData.filter((card)=>{
            if(categoryType==="all"){
                
                return cardsData;
            }else{

                return card.category ===categoryType;
    
            }
            })
        
        setMenuCategories(filterCards)

    }

    const objectStyleActive ={
        backgroundColor:'var(--main-color)'
    }



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
                  onClick={handleFilterCategory}
                  index={item.category}
                  objectStyleActive={whichActiveRef.current===item.category ?objectStyleActive : null}
                />
                </Fragment>
            ))
        }
    
    </section>

    <section className="properties-page__cards">
    {
        menuCategories.map((item)=>(
        <div className="fade-in-element" key={item.id}>
                <CardProperty
                {...item}
                />
        </div>
        ))
    }

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
