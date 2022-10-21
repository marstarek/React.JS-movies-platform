import React,{useEffect,useState} from 'react'
import { useParams ,useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
import { useDispatch, useSelector } from "react-redux";
import { getmovie } from "./../../store/movieSlice";
import"./details.css";
const Details = () => {
  const [page, setpage] = useState(1);
  const [moviepopular, setmoviepopular] = useState("popular");
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getmovie(id)).unwrap().then((data) => console.log(data));
  }, [id]);
  const {isLoading , movies,movieInfo} = useSelector((state) => state.movies);
  console.log(movieInfo, isLoading,"gggggggggggggg");
  const history = useNavigate();
  console.log(id);
  const handelClik = () => {

      history("/");
  };

  return (
    <div className="movie-details  mx-auto">
    {isLoading ? (
      <div style={{width:"fit-content",margin:" 0 auto","zIndex": "10000","marginTop": "220px"}}>
        <div className="spinner-border" style={{width:"5rem",height:"5rem"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : null}
      {movieInfo && (

        <>
        <div className="hero min-h-screen bg-image" style={{
            "backgroundImage":
              `url(http://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path})`,    "background-repeat": "no-repeat",
             "background-size": "cover",
              "background-position":" center",
          }}>  </div>

        <div className="container mx-auto bg-contant" key={movieInfo.id}>
        <div className="">
        <div className="hero-content flex-col lg:flex-row">
        <img className="max-w-xs rounded-lg shadow-2xl " src={`http://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}/>
        <div>
        <h1 className="text-5xl font-bold">{movieInfo.title}</h1>
        <p className="py-6">{movieInfo.overview}</p>
        <button className="btn show_details" onClick={handelClik}>
            back
                </button>
        <button className=" btn show_details">
            Watch
                </button>
              </div>
  </div>
</div>

</div>
</>







      
      )}
    </div>
  );
};

export default Details;
