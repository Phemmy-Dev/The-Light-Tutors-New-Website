import proptypes from 'prop-types';
import { motion } from 'framer-motion';

const Vbox = (props) => {
  return (
    <div>
        <motion.div 
        className="vision bg-slate-100 my-10 px-10 py-6 rounded-lg flex flex-col justify-center "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
            <h3 className='text-tltorange font-semibold text-2xl mb-3'>{props.title}</h3>
            <p className='text-sm text-justify'>{props.text}</p>
        </motion.div>
    </div>
  )
}


Vbox.propTypes = {
    title: proptypes.string,
    text: proptypes.string
}
export default Vbox
