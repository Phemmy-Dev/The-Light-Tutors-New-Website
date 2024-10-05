import PropTypes from 'prop-types';

const TeamBox = (props) => {
  return (
    <div>
        <div className="box flex flex-wrap items-center justify-center gap-12 relative overflow-hidden shadow-lg">
            <div className="tutor_box_img flex flex-col">
                <img src={props.img} alt="" className=" w-40 h-48 md:w-52 md:h-60 rounded-lg"/>
            </div>
            <div className="box_text mt-2 absolute bottom-2 inset-x-0 flex flex-col justify-start border-2 border-tltorange text-center mx-3 bg-white bg-opacity-80 rounded-full py-1 px-1 z-20">
                <h4 className="text-tltorange font-bold text-sm ">
                    {props.name}
                </h4>
                <p className=" font-normal text-xs">
                    {props.title}
                </p>
            </div>
    </div>
    </div>
  )
}

TeamBox.propTypes ={
    img: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,

}

export default TeamBox
