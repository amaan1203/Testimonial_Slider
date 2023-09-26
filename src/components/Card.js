import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";



const Card = (props) => {

  let review = props.review;
  console.log("review recieved");
  console.log(review);
  return (
    <div className='flex flex-col md:relative justify-center items-center'>
        <div className=' top-[-5rem] z-[10] left-[2rem] absolute  '> 
        <div><img className='w-[140px] h-[140px] rounded-full aspect-square z-25 relative' src={review.image}></img>
        <div className='w-[140px] h-[140px] top-[-6px] z-[-20] left-[10px] absolute rounded-full aspect-square bg-violet-400'></div>

        </div> 
      </div>
      <div className='text-center mt-7'>
        <p className='font-bold text-3xl capitalize'>{review.name} </p>
      </div>

      <div className='text-center mt-3'>
        <p className='text-violet-300 uppercase text-md '>{review.job}</p>
      </div>
      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteLeft />
      </div>
      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>
      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteRight />
      </div>
    </div>


  )

}

export default Card
