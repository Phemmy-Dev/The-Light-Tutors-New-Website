import proptypes from 'prop-types';


const ChooseBox = ({title, text, icon}) => {

  return (
    <div className=' flex flex-col max-w-56 md:mt-10 bg-white shadow-2xl px-3 py-10 rounded-lg gap-5'>
        <div className="choose_box  h-40 flex flex-col gap-3">
            {/* Icon */}
            <div className="icon">
                <img src={icon} alt={title} className='w-6 h-6 md:w-10 md:h-10'/>
            </div>
            {/* Title */}
            <div className="title">
                <h3 className='font-bold text-sm md:text-base'>{title}</h3>
            </div>
            {/* Text */}
            <div className="text ">
                <p className='text-xs text-gray-400'>{text}</p>
            </div>
        </div>
    </div>
  )
}

ChooseBox.propTypes = {
    icon: proptypes.string,
    title: proptypes.string,
    text: proptypes.string  
}

export default ChooseBox
