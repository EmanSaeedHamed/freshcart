'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
export default function Slider() {
  return <>
        <section className='relative'>
           <Swiper
     modules={[Navigation , Pagination , Autoplay]}
     navigation={{
      prevEl: '.custom-prev',
      nextEl: '.custom-next'
     }}
     autoplay={{delay: 7000}}
     loop={true}
     pagination={{clickable: true}}
  >
    <SwiperSlide  className="pt-25 pl-10 pl-25 min-h-96 bg-[linear-gradient(rgba(0,100,0,0.2),rgba(0,100,0,0.2)),url('/3d-apple-illustration.jpg')]
                bg-cover
                bg-center">
          <div className='flex flex-col gap-4'>
            <h2 className='text-white text-3xl font-bold max-w-96'>
             Fresh Products Delivered to your Door
            </h2>
            <p className='text-white'>
             Get 20% off your first order
            </p>
            <div className='flex items-center gap-3'>
              <button type='button' className='btn bg-white font-semibold text-primary-600 border-2 border-white hover:scale-105 transition-transform duration-300'>
                Shop Now
              </button>
              <button type='button' className='btn bg-transparent font-semibold border-2 border-primary-600 text-white hover:scale-105 transition-transform duration-300'>
                View Deals
              </button>
            </div>
          </div>
    </SwiperSlide>

    <SwiperSlide  className="pt-25 pl-10 lg:pl-25 min-h-96   
               bg-[linear-gradient(rgba(0,100,0,0.2),rgba(0,100,0,0.2)),url('/3d-apple-illustration.jpg')]
                bg-cover
                bg-center">
          <div className='flex flex-col gap-4'>
            <h2 className='text-white text-3xl font-bold max-w-96'>
              Premium Quality Guaranteed
            </h2>
            <p className='text-white'>
              Fresh from farm to your table
            </p>
            <div className='flex items-center gap-3'>
              <button type='button' className='btn bg-white font-semibold text-primary-600 border-2 border-white hover:scale-105 transition-transform duration-300'>
                Shop Now
              </button>
              <button type='button' className='btn bg-transparent font-semibold border-2 border-primary-600 text-white hover:scale-105 transition-transform duration-300'>
                Learn More
              </button>
            </div>
          </div>
    </SwiperSlide>

    <SwiperSlide  className="pt-25 pl-10 lg:pl-25 min-h-96 
                bg-[linear-gradient(rgba(0,100,0,0.2),rgba(0,100,0,0.2)),url('/3d-apple-illustration.jpg')]
                bg-cover
                bg-center">
          <div className='flex flex-col gap-4'>
            <h2 className='text-white text-3xl font-bold max-w-96'>
              Fast & Free Delivery
            </h2>
            <p className='text-white'>
              Same day delivery available
            </p>
            <div className='flex items-center gap-3'>
              <button type='button' className='btn bg-white font-semibold text-primary-600 border-2 border-white hover:scale-105 transition-transform duration-300'>
                Order Now
              </button>
              <button type='button' className='btn bg-transparent font-semibold border-2 border-primary-600 text-white hover:scale-105 transition-transform duration-300'>
                Delivery Info
              </button>
            </div>
          </div>
    </SwiperSlide>
  </Swiper>
              {/* arrows for  slider */}
  <div className='hidden lg:flex items-center justify-between absolute z-20 top-1/2 -translate-y-1/2 left-0 right-0 px-5'>
    {/* left arrow */}
    <button type='button' className='custom-prev flex items-center justify-center size-12 rounded-full bg-white/60 hover:bg-white transition-colors duration-200 text-primary-600'>
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {/* right arrow */}
      <button type='button' className='custom-next flex items-center justify-center size-12 rounded-full bg-white/60 hover:bg-white transition-colors duration-200 text-primary-600'>
      <FontAwesomeIcon icon={faChevronRight} />
      </button>
  </div>
        </section>
       
  </>
}
