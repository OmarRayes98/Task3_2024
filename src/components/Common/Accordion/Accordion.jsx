import "./Accordion.css";
import { useState } from "react";

const Accordion = () => {

    const [activeItemAccordion, setActiveItemAccordion] = useState('item1');

  return (
    <div className="featured__content_accordion">

    <div className="featured__content_accordion-item">
        <dt onClick={() => setActiveItemAccordion('item1')}>
            <a style={{color:activeItemAccordion==="item1" && 'var(--main-color'}}>Best useful link?</a>
        </dt>

        <dd id="item1">
            {activeItemAccordion === 'item1' && 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
        </dd>
    </div>

    <div className="featured__content_accordion-item">
        <dt onClick={() => setActiveItemAccordion('item2')}>
            <a  style={{color:activeItemAccordion==="item2" && 'var(--main-color'}}>How does it work?</a>
        </dt>

        <dd id="item2">
            {activeItemAccordion === 'item2' && 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
        </dd>
    </div>

    <div className="featured__content_accordion-item">
        <dt onClick={() => setActiveItemAccordion('item3')}>
            <a  style={{color:activeItemAccordion==="item3" && 'var(--main-color'}}>Why is Villa agency is the best?</a>
        </dt>

        <dd id="item3">
            {activeItemAccordion === 'item3' && 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
        </dd>
    </div>


    </div>
  )
}

export default Accordion
