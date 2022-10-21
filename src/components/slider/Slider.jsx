import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function Slider({movies}) {
 
console.log(movies);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        loop={true}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper my-6 "
      >
        <div
          slot="container-start"
          className="parallax-bg"
          
          data-swiper-parallax="-23%"
        ></div>

        {
          movies ? movies.results.map((movie) => (
            <SwiperSlide style={{
            "backgroundImage":
              `url(http://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,    "background-repeat": "no-repeat",
             "background-size": "cover",
              "background-position":" center",
          }}>
          <div className="title text-red-600 font-bold " data-swiper-parallax="-300">
          {movie.title}
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          {movie.original_title
}
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            {movie.overview}
            </p>
          </div>
              <div className="button" data-swiper-parallax="-100">
                
                <Link className='show_details' to={`/Details/${movie.id}`}>
                <button className="btn btn-circle bg-red-700 border-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
</svg>
</button>


              </Link>


       

          </div>
        </SwiperSlide>











          )):"no data"
}









      
       
      </Swiper>
    </>
  );
}
