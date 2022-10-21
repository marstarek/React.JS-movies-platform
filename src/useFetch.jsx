import React from 'react';
import { useState, useEffect } from "react";

const useFetch = (page,type) => {
  let url=`https://api.themoviedb.org/3/movie/${type}?api_key=6a9ddc3df7630d56986815607058bfec&language=en-US&page=${page}&?with_genres=18`
     const [data, setData] = useState(null);
     const [isloading, setIsloading] = useState(true);
     const [error, setError] = useState(null);
     useEffect(() => {
          setTimeout(() => {
            fetch(url)
              .then((res) => {
                if (!res.ok) {
                  throw Error("could not fetch data !")
                }
                  return res.json();
                })
                .then((data) => {
                  // console.log(data);
                  setData(data);
                  setIsloading(false);
                }).catch(err => {
                  setError(err.message)
                  setIsloading(false);
          
                })
          }, 1000);
     }, [url]);
     
     return {data,isloading,error}
}

export default useFetch
// this is custom reuseable Hook to fetch data 