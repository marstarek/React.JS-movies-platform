import React, { useRef, useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import "./filterslider.css";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
export default function FilterSlider({ isLoading, movies, dispatch, getmovie }) {
  const [pageType, setPageType] = useState(28);

  return (
    <>
            <h1 className='text-center py-3 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-red-800 to-red-500'>Most Popular Movies</h1>

       <div className=" flex flex-row flex-wrap justify-center py-5   filter-wrapper">
      {" "}
      <div className="basis-1  px-5 py-2 	">
        <button className="btn bg-red-600 border-0 shadow-sm rounded-full" onClick={() => { setPageType(28)}}  >Action</button>
      </div>
      <div className="basis-1 px-5 py-2 ">
        <button className="btn bg-red-600 border-0 shadow-sm rounded-full " onClick={() => { setPageType(10751)}}>History</button>
      </div>
      <div className="basis-1 px-5 py-2">
          <button className="btn bg-red-600 border-0 shadow-sm rounded-full "
          onClick={() => { setPageType(18)}}>Drama</button>
      </div>
      <div className="basis-1 px-5 py-2">
        <button className="btn bg-red-600 border-0 shadow-sm rounded-full" onClick={() => { setPageType(35)}}>Comedy</button>
      </div>
      <div className="basis-1 px-5 py-2">
        <button className="btn bg-red-600 border-0 shadow-sm rounded-full" onClick={() => { setPageType(16)}}>Animation</button>
      </div>
      <div className="basis-1 px-5 py-2">
        <button className="btn bg-red-600 border-0 shadow-sm rounded-full" onClick={() => { setPageType(12)}}>Adventure</button>
      </div>
    </div>
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
         {isLoading ? (
        <div role="status" className="flex justify-center">
          <svg
            aria-hidden="true"
            className=" mr-2 h-16 w-16 animate-spin fill-red-800 text-red-400 dark:text-red-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        ) : (
            <>
             
              {
                

          movies ? movies.results.filter(movie => movie.genre_ids.includes(pageType)).map((movie) => (

            <SwiperSlide        className='shadow-xl ' key={movie.id}
         style={{
            "backgroundImage":
              `url(http://image.tmdb.org/t/p/w500/${movie.poster_path})`,    "background-repeat": "no-repeat",
             "background-size": "cover",
              "background-position":" center",
          }}
        >
          <div className="">
            <h2 className="text-center font-bold text-transparent text-l text-white">  {movie.title}</h2>
            <p>{movie.original_language}</p>
            <div
              className=" flex items-center
    justify-center"
                >

<Link className='show_details'  to={`/Details/${movie.id}`}><button className="btn bg-red-600 border-0  btn-circle"
            
            >
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
        </button></Link>

                  

              <div
                className="radial-progress border-4 border-red-600 bg-red-600 text-xs text-primary-content"
                style={{ "--value": movie.vote_average*10 }}
              >
               {movie.vote_average*10 }
              </div>
            </div>
          </div>
        </SwiperSlide>



            
          )):"no data"
}
            
            
            
            </>
      )}








  
      </Swiper>
    </>
  );
}
