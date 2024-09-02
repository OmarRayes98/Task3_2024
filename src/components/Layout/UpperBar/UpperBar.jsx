import "./UpperBar.css";
import  {FaMap ,FaFacebook ,FaTwitter, FaLinkedin,FaInstagram}  from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Container from "../../Common/Container/Container";

const UpperBar = () => {

  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > document.querySelector('.upperbar').offsetHeight) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //     console.log(document.querySelector('.upperbar').offsetHeight,"document.querySelector('.upperbar').offsetHeight")
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);




  return (
    <section className="upperbar">
    <Container>
      <div className="upperbar__row">

        <div className="upperbar__info">
        <div className="upperbar__content">
        <FaMap/>
        <span>info@company.com</span>
        </div>


        <div className="upperbar__content">
        <MdEmail/>
        <span>Sunny Icles Beach,FL33160</span>
        </div>


        </div>

        <div className="upperbar__icons">
            <FaFacebook />
            <FaTwitter/>
            <FaLinkedin/>
            <FaInstagram/>
        </div>

      </div>
      </Container>
    </section>
  )
}

export default UpperBar;
