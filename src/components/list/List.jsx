import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getmovies } from "./../../store/movieSlice";
function List() {



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmovies());
  }, [dispatch]);
  const {isLoading , movies} = useSelector((state) => state.movies);
  console.log(movies, isLoading);


  return (

<div>
      



      <div className="container mx-auto  grid grid-cols-4 grid-rows-4 gap-4">
        
   












        {
        
          movies ? movies.results.map((movie) => (
            <div className="card w-50 bg-base-100 shadow-xl" key={movie.id}>
  <figure><img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" /></figure>
  <div className="card-body 	">
    <h2 className="card-title flex-col">
    {movie.title}
<div className="badge badge-secondary">release_date{movie.release_date} </div>
    </h2>
    {/* <p>{movie.overview}</p> */}
    <div className="card-actions justify-end">
      <div className="badge badge-outline">language {movie.original_language}</div> 
      <div className="badge badge-outline">vote_average{movie.vote_average
}
</div>
    </div>
  </div>
</div>
    )):"ff"
}
        
        



      </div>

      <div className='flex  justify-center pb-5'>
      <div className="btn-group">
  <button className="btn btn-active">1</button>
  <button className="btn ">2</button>
  <button className="btn">3</button>
  <button className="btn">4</button>
</div> 
</div>

    
      </div>
  )
}

export default List