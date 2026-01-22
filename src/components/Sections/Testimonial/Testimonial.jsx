import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Miss Tade",
      role: "Parent",
      initials: "MT",
      rating: 5,
      pullQuote: "Moved from the bottom set to the top!",
      text: "I wanted to let you know that Omolade was moved from set 5 (the lowest set) to set 1 in science. Thank you so much for helping her achieve this and being a wonderful teacher.",
      achievement: "Set 5 → Set 1",
      verified: true,
    },
    {
      name: "Mrs Ottun",
      role: "Parent",
      initials: "MO",
      rating: 5,
      pullQuote: "Finally, a platform worth recommending.",
      text: "I was waiting for a personal recommendation before choosing an online tutor. My uncle reassured me it was a good decision because his son was so impressed. A big thanks to TLT for their competent, dedicated, and friendly tutors.",
      achievement: "Trusted Choice",
      verified: true,
    },
    {
      name: "Mrs Soyoye",
      role: "Parent",
      initials: "MS",
      rating: 5,
      pullQuote: "We're sticking with you for our second son!",
      text: "Thank you so much. Teacher Daniel has been of immense support to Femi's preparations for GCSE. We would love to keep him for A-Levels, as well as for our second son.",
      achievement: "GCSE Success",
      verified: true,
    },
    {
      name: "Parent of Femi",
      role: "Parent",
      initials: "PF",
      rating: 5,
      pullQuote: "As and Bs in Maths and Physics!",
      text: "Femi did exceptionally well in his GCSEs — As and Bs in Maths and Physics! Thank you so much to The Light Tutors team for your unwavering support and guidance. Special thanks to Teacher Daniel for being such a pillar of support throughout. We're excited to continue with him for A-Levels!",
      achievement: "A's & B's",
      verified: true,
    },
    {
      name: "Student",
      role: "Student",
      initials: "ST",
      rating: 5,
      pullQuote: "My GCSEs felt like a breeze.",
      text: "These past months with The Light Tutors have been amazing! The GCSE preparations were smooth, stress-free, and truly enjoyable thanks to the incredible teachers. Huge thanks to Obasa, Noah, Mr Seyi, and all the substitute teachers for their dedication. A 10/10 experience!",
      achievement: "10/10 Experience",
      verified: true,
    },
    {
      name: "A Grateful Parent",
      role: "Parent",
      initials: "GP",
      rating: 5,
      pullQuote: "I see the effort you all put in.",
      text: "Deep appreciation to all The Light Tutors — your dedication, support, and hard work from day one have been outstanding. I see your effort and I'm truly grateful. God bless you all, and best wishes to David!",
      achievement: "Outstanding Support",
      verified: true,
    },
    {
      name: "Parent of Atinu",
      role: "Parent",
      initials: "PA",
      rating: 5,
      pullQuote: "Atinu passed the cutoff mark.",
      text: "Atinu passed the cutoff mark! Thank you so much to The Light Tutors team for your consistent support and dedication. We couldn't have done it alone without you.",
      achievement: "Passed Cutoff",
      verified: true,
    },
  ];

  return (
    <div id="testimonials" className='relative bg-gradient-to-br from-tltgreen via-[#1a4d3a] to-tltgreen py-20 md:py-28 overflow-hidden'>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tltorange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Testimonial Heading */}
      <motion.div
        className="relative testimonial_heading flex flex-col items-center justify-center px-4 md:px-8 gap-4 md:gap-5 mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Trust Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-tltorange to-orange-600 rounded-full shadow-xl mb-2"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-white font-bold text-sm md:text-base">Verified Reviews</span>
        </motion.div>

        {/* Star Rating with Count */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                className="w-6 h-6 md:w-8 md:h-8 text-tltorange drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
          <span className="text-white font-bold text-xl md:text-2xl">4.9/5</span>
          <span className="text-white/80 text-sm md:text-base">(50+ Reviews)</span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl text-tltwhite font-bold text-center leading-tight max-w-4xl">
          Trusted by Parents Across <span className="text-tltorange">Europe</span>
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-tltwhite/90 max-w-3xl text-center leading-relaxed">
          Real success stories from <span className='text-tltorange font-semibold'>The Light Guardians</span> — families who've seen their children thrive with our expert tutors
        </p>
      </motion.div>

      {/* Swiper Container */}
      <motion.div
        className="relative testimonial_slide px-4 md:px-8 lg:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper pb-16"
          breakpoints={{
            1280: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 28,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className='group relative flex flex-col justify-between min-h-[420px] md:min-h-[460px] bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/30 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,107,53,0.3)] rounded-3xl px-6 md:px-8 py-8 md:py-10 transition-all duration-500 border-2 border-transparent hover:border-tltorange/30 overflow-hidden'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                {/* Decorative corner accent */}
                <div className="absolute -top-1 -right-1 w-24 h-24 bg-gradient-to-br from-tltorange/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top Section: Quote + Achievement Badge */}
                <div>
                  {/* Quote Icon with pulse animation */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-tltorange to-orange-600 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl"
                    whileHover={{ scale: 1.15, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </motion.div>

                  {/* Achievement Badge */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="flex-1"></div>
                    <motion.div
                      className="px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-full"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-green-700 font-semibold text-xs md:text-sm flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {testimonial.achievement}
                      </span>
                    </motion.div>
                  </div>

                  {/* Rating Stars with shimmer effect */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-5 h-5 text-tltorange drop-shadow-sm"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.05, type: "spring" }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Powerful Pull Quote */}
                  <motion.div
                    className="mb-5 px-4 py-3 bg-gradient-to-r from-tltorange/10 to-orange-100/50 border-l-4 border-tltorange rounded-r-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-tltgreen font-bold text-base md:text-lg leading-snug italic">
                      "{testimonial.pullQuote}"
                    </p>
                  </motion.div>

                  {/* Testimonial Text */}
                  <p className='text-gray-700 leading-relaxed text-sm md:text-base mb-6 flex-grow'>
                    {testimonial.text}
                  </p>
                </div>

                {/* Bottom Section: Profile */}
                <div className="flex items-center gap-4 pt-5 border-t-2 border-gray-100 group-hover:border-tltorange/20 transition-colors duration-500">
                  {/* Avatar with glow effect */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-tltorange rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-tltorange via-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                      {testimonial.initials}
                    </div>
                    {/* Verified checkmark */}
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </motion.div>

                  {/* User Info */}
                  <div className="flex-grow">
                    <h4 className='font-bold text-base md:text-lg text-tltgreen group-hover:text-tltorange transition-colors duration-300 mb-1'>
                      {testimonial.name}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Trust Indicators Below Carousel */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-white/90">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-tltorange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg md:text-xl">100+</p>
              <p className="text-xs md:text-sm text-white/70">Happy Families</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white/90">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-tltorange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg md:text-xl">100%</p>
              <p className="text-xs md:text-sm text-white/70">Verified Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white/90">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-tltorange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg md:text-xl">96%</p>
              <p className="text-xs md:text-sm text-white/70">Grade Improvement</p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          className="flex flex-col items-center justify-center gap-6 mt-16 md:mt-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center max-w-3xl leading-tight">
            Ready to see these kinds of results for <span className="text-tltorange">your child?</span>
          </h3>
          <motion.a
            href="https://api.whatsapp.com/send?phone=2348153418503"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-tltorange to-orange-600 text-white font-bold text-base md:text-lg rounded-full shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,107,53,0.6)] transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <svg className="w-6 h-6 md:w-7 md:h-7 relative z-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" />
            </svg>
            <span className="relative z-10">Yes! Book Our Free Session</span>
          </motion.a>
          
          <p className="text-white/80 text-sm md:text-base text-center">
            No commitment required • See why 300+ families trust us
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonial;