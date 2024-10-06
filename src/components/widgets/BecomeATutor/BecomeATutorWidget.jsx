import PropTypes from 'prop-types';


const BecomeATutorWidget = (props) => {
  return (
    <div>
        <div className='bat-Cont'>
        <div className="w-full h-screen bg-cover bg-center flex justify-center items-center flex-col"
                style={{
                    backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${props.batImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
        <div className="batcontent flex flex-col justify-center items-center gap-3">
            <h1 className='text-3xl font-semibold text-tltwhite text-center'>{props.title}</h1>
                <p className='text-xs text-tltwhite w-1/2 text-center'>{props.subtext}</p>
                <p className='w-1/2 text-xs text-center text-tltwhite'>{props.subsubtext}</p>
        </div>
        </div>

        
      </div>
    </div>
  )
}


BecomeATutorWidget.propTypes = {
    title: PropTypes.string.isRequired, 
    subtext: PropTypes.string.isRequired, 
    subsubtext: PropTypes.string.isRequired, 
    herobtn: PropTypes.string.isRequired, 
    contCname: PropTypes.string.isRequired, 
    sectionCname: PropTypes.string.isRequired, 
    batImg: PropTypes.string.isRequired, 
    heroBtnStyle: PropTypes.string.isRequired, 
    otherProp: PropTypes.any,           
  };

export default BecomeATutorWidget
