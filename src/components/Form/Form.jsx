import Button from "../Common/Button/Button";
import "./Form.css";

const Form = () => {
  return (
    <section className="form__contact">

    <div className="form__control">
    <label htmlFor="name">Full Name</label>
    <input placeholder="FULL NAME" type="text" id="name" name="name" />
    </div>

    <div className="form__control">
    <label htmlFor="email">Email Address</label>
    <input placeholder="EMAIL" type="email" name="email" />
    </div>

    <div className="form__control">
    <label htmlFor="subject">Subject</label>
    <input placeholder="SUBJECT" type="text"  name="subject" />
    </div>

    <div className="form__control">
    <label  htmlFor="message">Message</label>
    <textarea placeholder="YOUR MESSAGE" name="message" rows="10">
        
    </textarea>

    </div>

    <Button 
    text="Send Message"
    withIcon={false}
    />
    
    </section>
  )
}

export default Form
