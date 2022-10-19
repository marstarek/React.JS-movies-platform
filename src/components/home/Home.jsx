import React from 'react'
import Slider from '../slider/Slider'
import Filter from '../filter/Filter'
import FilterSlider from '../filterslider/FilterSlider'
import Trend from '../trend/Trend'
import List from '../list/List'

const Home = () => {
     return (
       <>
               
         <Slider /> 
         <Filter/>  
         <FilterSlider />
         <Trend />
         <List/>
   
       


       </>

  )
}

export default Home