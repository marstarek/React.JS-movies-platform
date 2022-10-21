import React, { useRef, useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../useFetch";
import { Link } from 'react-router-dom';

function List() {

  const [page, setPage] = useState(1);
  const [movietype, setmovietype] = useState("top_rated");
  const{data:toprated,isloading,error}=useFetch(page,movietype)
  return (
<>
<h1 className='text-center pb-8 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-red-800 to-red-500'>Top Rated</h1>
<div>
        <div className="container mx-auto px-3  grid grid-cols-2 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4">
          
      {isloading ? (
        <div role="status" className="flex justify-center col-span-4">
          <svg
            aria-hidden="true"
            className=" mr-2 h-16 w-16 animate-spin fill-red-600 text-white-400 dark:text-gray-600"
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
        toprated && toprated.results.map((movie) => (
            <div className="card w-50 bg-base-100 shadow-xl" key={movie.id}>
  <figure><img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" /></figure>
  <div className="card-body 	">
    <h2 className="card-title ">
    {movie.title}
    </h2>
              {/* <p>{movie.overview}</p> */}
              
              <div className="card-actions   items-center">
      <div className="badge badge-outline">language {movie.original_language}</div> 
      <div className="badge badge bg-red-600 border-0">{movie.release_date} </div>
      <Link className='show_details' to={`/Details/${movie.id}`}>
                    <button className="btn bg-red-600 border-0  btn-circle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</button>
                  </Link >
                <div className="">
              
                  <p>    vote:{movie.vote_average}/10</p>
              
                  <progress className="progress progress-error w-25 border-0" value={movie.vote_average} max="10"></progress>
               
</div>
              </div>
             
  </div>
</div>
    ))
      )}

        
        



      </div>

      <div className='flex  justify-center pb-5 my-5'>
      <div className="btn-group">
  <button className="btn" onClick={() => { setPage(page-1);}}>«</button>
  <button className="btn">{page}</button>
  <button className="btn" onClick={() => { setPage(page+1);}}>»</button>
</div> 
</div>

    
      </div></>
  )
}

export default List