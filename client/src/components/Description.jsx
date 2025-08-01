// import React from 'react'
// import { assets } from '../assets/assets'

// const Description = () => {
//   return (
//     <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
//         <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Craete AI Images</h1>
//         <p className='text-gray-600'>Let your thoughts paint the picture</p>
//         <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
//             <img src={assets.sample_img_1}
//              alt="" className='w-80 xl:w-96 rounded-lg' />
//              <div>
//                 <h2 className='text-3xl font-medium max-w-lg mb-4'>
//                     Introducing the AI-Powered Text to Image Generator
//                 </h2>
//                 <p className='text-gray-600'>Unlock your imagination with our free AI image generator. 
//                 Whether you're aiming for stunning visuals or unique concepts, 
//                 our tool instantly converts your text into captivating imagery with just a few words.
//                 Describe your vision and watch it visually unfold in moments.
//             </p>
//                 <p className='text-gray-600'>Just enter a prompt, and let our advanced AI create high-quality 
//                 images in seconds. From product mockups to character art and futuristic
//                 scenes, even the wildest ideas that don’t yet exist can now be brought to life.
//                  With state-of-the-art AI at your fingertips, your creativity has no limits!
//                  </p>

//              </div>
//         </div>
//     </div>
//   )
// }

// export default Description

import React from 'react';
import { assets } from '../assets/assets';
import { MotionConfig } from 'motion/react';
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div 

     initial= {{opacity: 0.2 ,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1 , y:0}}
    viewport={{once:true}}

    
    className="flex flex-col items-center justify-center my-24 px-6 md:px-20 xl:px-32 text-center md:text-left">
      
      <h1 className="text-4xl font-semibold mb-1">Create AI Images</h1>
      <p className="text-gray-500 mb-10 text-base">Turn your imagination into visuals</p>

      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <img 
          src={assets.sample_img_1} 
          alt="AI generated sample" 
          className="w-72 sm:w-80 xl:w-96 rounded-lg shadow-lg" 
        />

        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
                   Unlock your imagination with our free AI image generator. 
                Whether you're aiming for stunning visuals or unique concepts, 
                 our tool instantly converts your text into captivating imagery with just a few words.
                 Describe your vision and watch it visually unfold in moments.
          </p>
          <p className="text-gray-600">
                Just enter a prompt, and let our advanced AI create high-quality 
                images in seconds. From product mockups to character art and futuristic
                scenes, even the wildest ideas that don’t yet exist can now be brought to life.
                 
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
