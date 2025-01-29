import CtaImg from '../../../assets/images/ctaImg.jpg';
import { motion } from 'framer-motion';

const Cta = () => {
  return (
    <div>
      <div className="cta_cont bg-tltgreen py-10">
        <div className="cta_content flex items-center justify-around gap-0 md:px-28">

          {/* Cta Image */}
          <motion.div
            className="cta-img w-2/5 hidden md:block"
            initial={{ opacity: 0, x: -50 }} // Start off-screen to the left
            whileInView={{ opacity: 1, x: 0 }} // Slide in to the final position
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={CtaImg} alt="" className='h-1/3 w-3/4 rounded-2xl' />
          </motion.div>

          {/* Cta Text */}
          <motion.div
            className="cta-text px-5 md:px-0 w-full md:w-2/5 flex flex-col gap-7"
            initial={{ opacity: 0, y: 50 }} // Start off-screen below
            whileInView={{ opacity: 1, y: 0 }} // Slide up to the final position
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Slight delay for staggered effect
          >
            <h2 className='text-3xl capitalize font-bold text-white'>
              Every child deserves the opportunity to learn.
            </h2>
            <p className='text-tltwhite'>
              We understand your needs, your experience with us is customized to better help us work with you towards achieving your personal goals.
            </p>
            <motion.a
              href="https://api.whatsapp.com/send?phone=2348153418503"
              whileHover={{ scale: 1.05 }} // Slight scale-up on hover
              whileTap={{ scale: 0.95 }} // Slight scale-down on click
            >
              <button className='bg-tltorange text-tltwhite hover:bg-transparent font-bold border-2 border-tltorange transition ease-in-out duration-300 w-48 px-5 py-3 rounded-full'>
                Get started
              </button>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cta;