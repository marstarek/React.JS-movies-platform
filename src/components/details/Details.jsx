import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
import { useDispatch, useSelector } from "react-redux";
import { getmovie } from "./../../store/movieSlice";
import "./details.css";
const Details = () => {
  const [page, setpage] = useState(1);
  const [moviepopular, setmoviepopular] = useState("popular");
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getmovie(id))
      .unwrap()
      .then((data) => console.log(data));
  }, [id]);
  const { isLoading, movies, movieInfo } = useSelector((state) => state.movies);
 
  const history = useNavigate();
  const handelClick = () => {
    history("/");
  };

  return (
    <div className="movie-details mx-auto  min-h-screen">
      {isLoading ? (
        <div
          role="status"
          className="flex justify-center"
          style={{
            top: "65%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
          }}
        >
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
          {movieInfo && (
            <>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(http://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path})`,
                  "background-repeat": "no-repeat",
                  "background-size": "cover",
                  "background-position": " center",
                }}
                key={movieInfo.id}
              >
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content flex-col lg:flex-row text-neutral-content">
                 <img src={`http://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} className="max-w-[20rem] rounded-lg shadow-2xl" />
                 <div>
                <h1 className="text-5xl font-bold">{movieInfo.title}</h1>
                <h1 className="text-3xl font-bold">{movieInfo.original_title
}</h1>
                      <p className="py-6">{movieInfo.overview}</p>


                      <div className="flex">
                      <div className="stats stats-vertical lg:stats-horizontal shadow  px-2">
  
  <div className="stat">
    <div className="stat-title">Vote Count</div>
    <div className="stat-value text-3xl">{movieInfo.vote_count
}</div>
    <div className="stat-desc">{movieInfo.vote_count
}</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Score</div>
    
                          <div className="stat-desc flex justify-center"><div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value":movieInfo.vote_average*10 }}>{movieInfo.vote_average }</div></div>
                          <div className="stat-desc">{movieInfo.vote_average }</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Views </div>
    <div className="stat-value text-3xl">{movieInfo.popularity}</div>
    <div className="stat-desc">↗︎ {movieInfo.popularity/100}</div>
  </div>
  
                      </div>
                      <div className="flex items-center flex-col justify-center px-2"  >
                        <ul >
         
                            <li>
                            original language :<div className="badge badge-ghost">
                            {movieInfo.original_language}
                          </div></li>
                          <li>release date :<div className="badge badge-ghost">
                            {movieInfo.release_date}
                            </div></li>
                            <li> Movie Home Page :    <a
                          href={movieInfo.homepage}
                          className="text-blue-400"
                          target="_blank"
                        >
                          {movieInfo.title}{" "}
                          </a></li>
                        </ul>
                      </div>
</div>

                     

 
                      



                      
                         
                          <div className="flex justify-center gap-1 py-5"> <button
                            className="btn border-0 bg-gray-600 text-white "
                            onClick={handelClick}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                              />
                            </svg>
                          </button>
                          <button className=" btn   border-0 bg-red-600 text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                              />
                            </svg>
                          </button></div>
                          
                       
                   
                         
    </div>
  </div>
  {/*  */}
               
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Details;
