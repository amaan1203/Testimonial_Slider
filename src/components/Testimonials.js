import React, { useState } from 'react'
import Card from './Card'
import reviews from '../data'
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";


const Testimonials = () => {
    const [currentReview,setCurrentReview]=useState(reviews[0]);
    function LeftClickHandler()
    {
        let newid= (currentReview.id - 1);
        if(newid===0) newid=5;
        console.log("new id printed");
        console.log(newid);
        reviews.forEach((review)=>{
            if(review.id===newid)
            {
                setCurrentReview(review);
                // console.log("current review ")
                // console.log(currentReview);

            } 
        
  
        })

    }

    function RightClickHandler()
    {
       
        let newid= (currentReview.id + 1);
        if(newid===6) newid=1;
        console.log("new id printed");
        console.log(newid);
        reviews.forEach((review)=>{
            if(review.id===newid)
            {
                setCurrentReview(review);
                // console.log("current review ")
                // console.log(currentReview);

            } 
        
  
        })


    }


    function SurpriseClickHandler()
    {

        let newid=Math.floor(Math.random() * 5)+1;
          console.log("random id is ");
           console.log(newid);
        reviews.forEach((review)=>{
            if(review.id===newid) setCurrentReview(review);
        })

    }

     return (
    <div className='flex flex-col justify-center items-center w-[65vw] h-[65vh] bg-white  rounded-md mt-10 p-10 transition-all duration-700  shadow-2xl   '> 
        <Card review={currentReview}></Card>
        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold' >
      <div >
        <button  onClick={LeftClickHandler}   className='cursor-pointer hover:text-violet-500'><FiChevronLeft /></button>
      </div>
      <div>
        <button  onClick={RightClickHandler}  className='cursor-pointer hover:text-violet-500'><FiChevronRight/></button>
      </div>
      </div>

      <div>
        <button onClick={SurpriseClickHandler}  className='bg-violet-400 hover:bg-violet-500 transition-all  duration-200 text-lg cursor-pointer px-10 py-2 rounded-md font-bold text-white '>
          Surprise me
        </button>
      </div>

    </div>
     );
    
  
}

export default Testimonials
