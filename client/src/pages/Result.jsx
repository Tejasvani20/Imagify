// import React from 'react'
// import { assets } from '../assets/assets'

// const Result = () => {
//   return (
//     <form className='flex flex-col min-h-[90vh] justify-center'>
//     <div>
//       <div className='relative'>
//         <img src={assets.sample_img_1} alt="" className='max-w-sm rounded' />
//         <span className='absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]'/>
//       </div>
//       <p>Loading....</p>
//     </div>

//     <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
//      <input type="text" placeholder='Describe what you want to Generate' 
//       className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color'  />
//       <button type='submit ' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>
//         Generate
//       </button>
//       </div>
//     </form>
//   )
// }

// export default Result

import React, { useState,useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react";
import { AppContext } from '../context/Appcontext';

const Result = () => {
    
  const[image,setImage]=useState(assets.sample_img_1)
  const[IsImageLoaded,setIsImageLoaded]=useState(false)
  const [ loading ,setLoading] = useState(false)
  const [ input , setInput] = useState('')
  const {generateImage}=useContext( AppContext )


  const onSubmitHandler = async (e) => {
     e.preventDefault()
     setLoading(true)
     if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
     }
     setLoading(false)
  };

  return (
    <motion.form 
    initial= {{opacity: 0.2 ,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1 , y:0}}
    viewport={{once:true}}
    
    onSubmit={onSubmitHandler}  className='flex flex-col min-h-[90vh] justify-center items-center px-4'>
      <div className='text-center'>
        <div className='relative'>

          <img src={image} alt="Generated result" className='w-72 rounded' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? 'w-full transition-all duration-[10s]' : 'w-0'
            }`} />
        </div>
        <p className= {!loading ? 'hidden' : ''}>Loading...</p>
      </div>


      {!IsImageLoaded &&
      <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>

       
        <input
         onChange={e=> setInput(e.target.value)} value={input}
          type="text"
          placeholder='Describe what you want to generate'
          className='flex-1 bg-transparent outline-none ml-8 placeholder:text-gray-300'
        />
        <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>
               Generate
        </button>
      </div> 
      }



     {IsImageLoaded &&
      
      <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10
       rounded-full'>
        <p onClick={()=>{setIsImageLoaded(false) }} 
        className='bg-transparent border border-zinc-900 text-black px-8 py-3 
                       rounded-full cursor-pointer'>
          Generate Another
        </p>
        <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'> Download</a>
      </div>  
              }
    </motion.form>
  );
};

export default Result;


