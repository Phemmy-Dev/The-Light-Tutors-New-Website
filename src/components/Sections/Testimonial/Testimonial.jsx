import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import CtaImg from '../../../assets/images/ctaImg.jpg';
import { Pagination } from 'swiper/modules';
// import { useState } from 'react';

const Testimonial = () => {
  return (
    <div className='bg-slate-50 my-20'>
      {/* Testimonial Heading */}
      <div className="testimonial_heading flex flex-col items-center  justify-between p-5 gap-4">
        <h2 className=" text-3xl font-bold text-center md:text-left">What Our Clients Are Saying</h2>
        <p className=" text-gray-400 w-full md:w-1/2 text-center">
        What <span className='text-tltorange '>The Light Guardians</span> have to say about us
        </p>
      </div>

      <div className="testimonial_slide">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper px-4 py-8"

        breakpoints={{
            // When window width is >= 1024px (large devices)
            1024: {
              slidesPerView: 3, // 3 slides on large screens
            },
            // When window width is >= 768px (medium devices)
            768: {
              slidesPerView: 2, // 2 slides on tablets
            },
            // When window width is >= 0px (small devices)
            0: {
              slidesPerView: 1, // 1 slide on small devices (mobile)
            },
          }}
      >
        <SwiperSlide>
            <div className='flex flex-col justify-center h-80 bg-tltwhite shadow-2xl rounded-xl px-10 py-10'>
                <p className=' text-gray-400 w-full text-left text-xs'>I got feedback from Paul's Science teacher. He got a reward as well. Thanks once again for the support and tuition that has helped Paul ease into Secondary School academics. He is doing remarkably well and sends his greetings.a</p>
                <div className="title text-left mt-2 text-sm">
                    <h4 className='font-semibold text-tltorange'>Mrs Soares</h4>
                    <p className='text-gray-400'>Parent</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='h-80 flex flex-col justify-center bg-tltwhite shadow-2xl rounded-xl px-10 py-10'>
                <p className=' text-gray-400 w-full text-left text-xs'>I have stumbled on several Online/Virtual platforms for teaching children home and abroad but I was always patiently waiting to come in contact with one that will be recommended in person either through a relations or friend.
                    <br />
                    All thanks to my uncle,who reassured me that it will be a good decision to sign up with TLT for my daughter because his son has been on the platform and he is impressed. <br />
                A big thanks to the Management of TLT for bringing onboard competent, dedicated and friendly Tutors for a good teaching service delivery.</p>
                <div className="title text-left mt-2 text-sm">
                    <h4 className='font-semibold text-tltorange'>Mrs Ottun
                    </h4>
                    <p className='text-gray-400'>Parent</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='h-80 flex flex-col justify-center bg-tltwhite shadow-2xl rounded-xl px-10 py-10'>
                <p className=' text-gray-400 w-full text-left text-xs'> I wanted to let you know that Omolade was moved from set 5 (lowest set) to set 1 in science. Thank you so much for helping her achieve this and being a wonderful teacher.</p>
                <div className="title text-left mt-2 text-sm">
                    <h4 className='font-semibold text-tltorange'>Mrs Tade</h4>
                    <p className='text-gray-400'>Parent</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='h-80 flex flex-col justify-center bg-tltwhite shadow-2xl rounded-xl px-10 py-10'>
                <p className=' text-gray-400 w-full text-left text-xs'>`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore nesciunt voluptates, aspernatur maxime dolorem incidunt molestiae maiores sequi eligendi perferendis repellat qui non enim alias praesentium! Corrupti, quos voluptate</p>
                <div className="title text-left mt-2 text-sm">
                    <h4 className='font-semibold text-tltorange'>Mr Oluwafemi</h4>
                    <p className='text-gray-400'>Parent</p>
                </div>
            </div>
        </SwiperSlide>

      </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
