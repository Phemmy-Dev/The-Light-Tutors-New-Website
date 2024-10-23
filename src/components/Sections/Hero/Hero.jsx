import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Hero.css'
const Hero = (props) => {
  return (
    <>
      <div className={props.contCname}>
        <div className="bg_img">
            <img src={props.heroImg} alt="Hero Image" style={{backgroundPosition: 'center', backgroundSize: 'cover'}} />
        </div>

        <div className={props.sectionCname}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href="http://wa.link/x1ej0c" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${props.heroBtnStyle} hover:bg-transparent border-2 border-tltorange transition ease-in-out duration-300`}
            > {props.herobtn}
            </a>
        </div>
      </div>
    </>
  )
}


Hero.propTypes = {
    title: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired, 
    herobtn: PropTypes.string.isRequired, 
    contCname: PropTypes.string.isRequired, 
    sectionCname: PropTypes.string.isRequired, 
    heroImg: PropTypes.string.isRequired, 
    heroBtnStyle: PropTypes.string.isRequired, 
    otherProp: PropTypes.any,           
  };

export default Hero
