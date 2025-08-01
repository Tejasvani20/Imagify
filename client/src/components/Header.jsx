// import React from 'react'
// import { assets } from '../assets/assets'

// const Header = () => {
//   return (
//     <div className='flex flex-col justify-center text-center my-20'>
//         <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-5 py-1 rounded-full border border-neutral-500'>
//             <p>
//                 Best Text To Image Generator
//                 <img src={assets.star_icon} alt="" />
//             </p>
//         </div>
//         <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'> Turn Text To Image,In Seconds</h1>
//     </div>
//   )
// }

// export default Header

import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/Appcontext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const {user,setShowLogin} =useContext(AppContext)
  const navigate=useNavigate()
  const  onClickHandler=()=>{
   if(user){
    navigate('/result')
   }
   else{
    setShowLogin(true)
   }
  }
  return (
    <motion.div className='flex flex-col items-center justify-center text-center min-h-[80vh] px-4'
    initial= {{opacity: 0.2 ,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1 , y:0}}
    viewport={{once:true}}

    >
      
      <motion.div className='text-stone-500 flex items-center gap-2 bg-white px-4 py-1 
      rounded-full border border-neutral-500'
    initial= {{opacity: 0.2 ,y:-20}}
    transition={{duration:1}}
    animate={{opacity:1 , y:0}}
    viewport={{delay:0.2 , duration:0.8}}>
        <span className='text-sm'>Best text to image generator</span>
        <img src={assets.star_icon} alt="star" className='w-4 h-4' />
      </motion.div>

   
      <motion.h1 className='text-4xl sm:text-6xl lg:text-7xl max-w-3xl mt-10 leading-tight font-semibold'
       initial= {{opacity: 0}}
       animate={{opacity:1}}
       transition={{delay:0.4,duration:2}}>
        Turn text to <br className='sm:hidden' /> <span className='text-blue-600'>image,</span> in seconds
      </motion.h1>
      
      <motion.p className=' text-center max-w-xl mx-auto mt-5'
       initial= {{opacity: 0 ,y:20}}
       animate={{opacity:1,y:0}}
       transition={{delay:0.6,duration:0.8}} >
            Bring your ideas to life with AI. Describe it in words, 
            and watch stunning visuals appear instantly. 
             </motion.p>

          <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5
           flex items-center gap-2 rounded-full'
         whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
       initial= {{opacity: 0}}
       animate={{opacity:1}}
       transition={{ default : {duartion:0.5} ,opacity: {delay:0.8,duration:1}}} >     
                Generate Image
                <img className='h-6 'src={assets.star_group} alt="" />
            </motion.button>

       <motion.div className='flex flex-wrap justify-center mt-16 gap-3'
       initial= {{opacity: 0 }}
       animate={{opacity:1}}
       transition={{delay:1,duration:1}}>

         {Array(6).fill(' ').map((item ,index)=>(
            <motion.img whileHover={{scale:1.05,duartion:0.1}} className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt="" key={index} width={70} />
         ))}
       </motion.div>
       <motion.p 
       initial= {{opacity: 0 }}
       animate={{opacity:1}}
       transition={{delay:1.2,duration:0.8}}
       className='mt-2 text-neutral-600'> 
        Generated images from imagify
       </motion.p>
    </motion.div>
  )
}

export default Header
