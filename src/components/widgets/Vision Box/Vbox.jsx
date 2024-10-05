import proptypes from 'prop-types';

const Vbox = (props) => {
  return (
    <div>
        <div className="vision bg-slate-100 my-10 px-10 py-6 rounded-lg flex flex-col justify-center ">
            <h3 className='text-tltorange font-semibold text-2xl mb-3'>{props.title}</h3>
            <p className='text-sm'>{props.text}</p>
        </div>
    </div>
  )
}


Vbox.propTypes = {
    title: proptypes.string,
    text: proptypes.string
}
export default Vbox
