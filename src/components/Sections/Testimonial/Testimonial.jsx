import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <div className='bg-tltgreen my-20'>
      {/* Testimonial Heading */}
      <motion.div
        className="testimonial_heading flex flex-col items-center justify-between p-5 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-3xl text-tltwhite font-bold text-center md:text-left">
          What Our Clients Are Saying
        </h2>
        <p className="text-xs md:text-xl text-tltwhite w-full md:w-1/2 text-center">
          What <span className='text-tltorange'>The Light Guardians</span> have to say about us
        </p>
      </motion.div>

      {/* Swiper Container */}
      <motion.div
        className="testimonial_slide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper px-4 py-8"
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {/* Swiper Slides */}
          <SwiperSlide className='rounded-xl'>
            <motion.div
              className='flex flex-col justify-center h-80 bg-tltwhite shadow-2xl rounded-xl px-10 py-10'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <p className='text-gray-400 w-full text-left text-xs'>
                Thank you so much. Teacher Daniel has been of immense support to Femi's preparations for GSCE and we would love to keep him for Femi's Alevels, as well as for our second son.
              </p>
              <div className="title text-left mt-2 text-sm">
                <h4 className='font-semibold text-tltorange'>Mrs Soyoye</h4>
                <p className='text-gray-400'>Parent</p>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide className='rounded-xl'>
            <motion.div
              className='h-80 flex flex-col justify-center bg-tltwhite shadow-2xl rounded-xl px-10 py-10'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <p className='text-gray-400 w-full text-left text-xs'>
                I have stumbled on several Online/Virtual platforms for teaching children home and abroad but I was always patiently waiting to come in contact with one that will be recommended in person either through a relations or friend.
                <br />
                All thanks to my uncle, who reassured me that it will be a good decision to sign up with TLT for my daughter because his son has been on the platform and he is impressed. <br />
                A big thanks to the Management of TLT for bringing onboard competent, dedicated and friendly Tutors for a good teaching service delivery.
              </p>
              <div className="title text-left mt-2 text-sm">
                <h4 className='font-semibold text-tltorange'>Mrs Ottun</h4>
                <p className='text-gray-400'>Parent</p>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide className='rounded-xl'>
            <motion.div
              className='h-80 flex flex-col justify-center bg-tltwhite shadow-2xl rounded-xl px-10 py-10'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              <p className='text-gray-400 w-full text-left text-xs'>
                I wanted to let you know that Omolade was moved from set 5 (lowest set) to set 1 in science. Thank you so much for helping her achieve this and being a wonderful teacher.
              </p>
              <div className="title text-left mt-2 text-sm">
                <h4 className='font-semibold text-tltorange'>Miss Tade</h4>
                <p className='text-gray-400'>Parent</p>
              </div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Testimonial;