import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./filterslider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function FilterSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="FilterSlider"
      >
        <SwiperSlide        className='shadow-xl'
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
        >
          <div className="">
            <h2 className="">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div
              className=" flex items-center
    justify-center"
            >
              <button className="btn btn-primary  btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="radial-progress border-4 border-primary bg-primary text-xs text-primary-content"
                style={{ "--value": 70 }}
              >
                70%
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
        >
          <div className="">
            <h2 className="">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div
              className=" flex items-center
    justify-center"
            >
              <button className="btn btn-primary  btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="radial-progress border-4 border-primary bg-primary text-xs text-primary-content"
                style={{ "--value": 70 }}
              >
                70%
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide 
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
        >
          <div className="">
            <h2 className="">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div
              className=" flex items-center
    justify-center"
            >
              <button className="btn btn-primary  btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="radial-progress border-4 border-primary bg-primary text-xs text-primary-content"
                style={{ "--value": 70 }}
              >
                70%
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
        >
          <div className="">
            <h2 className="">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div
              className=" flex items-center
    justify-center"
            >
              <button className="btn btn-primary  btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="radial-progress border-4 border-primary bg-primary text-xs text-primary-content"
                style={{ "--value": 70 }}
              >
                70%
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
        >
          <div className="">
            <h2 className="">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div
              className=" flex items-center
    justify-center"
            >
              <button className="btn btn-primary  btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="radial-progress border-4 border-primary bg-primary text-xs text-primary-content"
                style={{ "--value": 70 }}
              >
                70%
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
        >
          <div className="">
            <h2 className="">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div
              className=" flex items-center
    justify-center"
            >
              <button className="btn btn-primary  btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="radial-progress border-4 border-primary bg-primary text-xs text-primary-content"
                style={{ "--value": 70 }}
              >
                70%
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
        >
          <div className="">
            <h2 className="">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div
              className=" flex items-center
    justify-center"
            >
              <button className="btn btn-primary  btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="radial-progress border-4 border-primary bg-primary text-xs text-primary-content"
                style={{ "--value": 70 }}
              >
                70%
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
          className='shadow-xl'
        >
          <div className="">
            <h2 className="">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div
              className=" flex items-center
    justify-center"
            >
              <button className="btn btn-primary  btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="radial-progress border-4 border-primary bg-primary text-xs text-primary-content"
                style={{ "--value": 70 }}
              >
                70%
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
