import CtaImg from '../../../assets/images/ctaImg.jpg';
import { motion } from 'framer-motion';

const Cta = () => {
  return (
    <div>
      <div className="cta_cont bg-tltgreen py-12 md:py-16 lg:py-20">
        <div className="cta_content flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 md:gap-6 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">

          {/* Cta Image */}
          <motion.div
            className="cta-img w-full md:w-2/5 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src={CtaImg} alt="Student Learning" className='w-full h-auto rounded-2xl shadow-2xl object-cover max-w-md md:max-w-none mx-auto' />
          </motion.div>

          {/* Cta Text */}
          <motion.div
            className="cta-text w-full md:w-3/5 lg:w-1/2 flex flex-col gap-4 md:gap-6 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight'>
              We Believe in Your Child's Potential. Let's Unlock It Together.
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-tltwhite leading-relaxed'>
              Take the first step without any risk. See for yourself how our personalized approach can transform your child's learning experience, absolutely free.
            </p>
            <motion.a
              href="https://api.whatsapp.com/send?phone=2348153418503"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className='bg-tltorange text-white hover:bg-white hover:text-tltgreen font-bold border-2 border-tltorange transition ease-in-out duration-300 w-full md:w-auto px-6 sm:px-8 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl'>
                Find My Child's Tutor
              </button>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cta;