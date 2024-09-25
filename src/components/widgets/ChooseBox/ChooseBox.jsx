import proptypes from 'prop-types';


const ChooseBox = ({title, text, icon}) => {

  return (
    <div className=' flex flex-col bg-white shadow-2xl px-5 py-10 rounded-lg gap-5'>
        <div className="choose_box flex flex-col gap-3">
            {/* Icon */}
            <div className="icon">
                <img src={icon} alt={title} className=' w-10 h-10'/>
            </div>
            {/* Title */}
            <div className="title">
                <h3 className='font-bold'>{title}</h3>
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
