import PropTypes from 'prop-types';

const AboutProp = (props) => {
    return (
        <>
        <div className={`${props.contCname} flex flex-col-reverse lg:flex-row-reverse lg:justify-between lg:items-center lg:px-10 gap-10 mx-5 xs:my-10 my-24 mb-10 md:mt-20`}>
            <div className="desc_content lg:w-2/5" >
                <h3 className='text-xl text-tltorange font-bold '>{props.about_preheading}</h3>
                <h3 className='text-4xl font-semibold mb-5'>{props.about_heading}</h3>
                <p className='text-gray-400 mb-5'>{props.about_text}</p>
                <button className=' bg-tltorange text-tltwhite hover:bg-transparent hover:text-black font-bold border-2 border-tltorange transition ease-in-out duration-300 px-5 py-3 rounded-full '>{props.about_btn}</button>
            </div>

            <div className="about_img lg:w-1/2 ">
                <img src={props.about_img} alt="About Img"  />
            </div>
        </div>
        </>
)
}

AboutProp.propTypes = {
    about_preheading: PropTypes.string.isRequired, 
    about_heading: PropTypes.string.isRequired, 
    about_text: PropTypes.string.isRequired, 
    about_img: PropTypes.string.isRequired, 
    contCname: PropTypes.string.isRequired,
    about_btn: PropTypes.string.isRequired
}
export default AboutProp
