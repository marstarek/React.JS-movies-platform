import {useEffect} from 'react'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Mousewheel, Pagination } from "swiper";
function Trend({movies}) {

  const [num, setNum] = useState(0);

  function randomNumberInRange() {
    return Math.floor(Math.random() * (20 + 1)) + 1;

  }







  return (

    <>
      


      <h1 className='text-center py-3 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-red-800 to-red-500'>Trending</h1>

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper my-8"
      >
      {   movies ? movies.results.map((movie) => (
            <SwiperSlide style={{
            "backgroundImage":
              `url(http://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,    "background-repeat": "no-repeat",
             "background-size": "cover",
              "background-position":" center",
        }}>
          <div className="title text-red-600 font-bold " data-swiper-parallax="-300">
          {movie.title}
          </div>
          <div
                className="radial-progress w-100 border-12 border-red-600 bg-red-600 text-xxl text-primary-content"
                style={{ "--value": movie.vote_average*10 }}
              >
               {movie.vote_average*10 }
              </div>



        </SwiperSlide> )):"no data"}
        
      </Swiper>



</>
    
  
  )
}

export default Trend


