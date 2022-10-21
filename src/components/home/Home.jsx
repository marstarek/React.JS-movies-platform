import React,{useEffect,useState} from 'react'

import Slider from '../slider/Slider'
import Filter from '../filter/Filter'
import FilterSlider from '../filterslider/FilterSlider'
import Trend from '../trend/Trend'
import List from '../list/List'
import { useDispatch, useSelector } from "react-redux";
import { getmovies,getmovie } from "./../../store/movieSlice";

const Home = () => {
  const [page, setpage] = useState(1);
  const [moviepopular, setmoviepopular] = useState("popular");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmovies({ page, moviepopular }));
    
  }, [dispatch]);
  const {isLoading , movies,movieInfo} = useSelector((state) => state.movies);

     return (
       <>
               
         <Slider movies={movies} /> 
         <FilterSlider  movies={movies} dispatch={dispatch} getmovie={getmovie} isLoading={isLoading} />
         <Trend movies={movies}/>
         <List />
   
       


       </>

  )
}

export default Home