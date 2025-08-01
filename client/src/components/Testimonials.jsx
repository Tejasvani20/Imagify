// import React from 'react'
// import { assets, testimonialsData } from '../assets/assets'

// const Testimonials = () => {
//   return (
//     <div className="flex flex-col items-center justify-center my-20 px-6 xl:px-32 text-center md:text-left">
//         <h1 className="text-4xl font-semibold mb-1">Customer Testimonials</h1>
//         <p className="text-gray-600 mb-12 ">What Our Users Are Saying</p>
//         <div className='flex flex-wrap gap-6'>
//             {testimonialsData.map((testimonials,index)=>(
//       <div key ={index} 
//       className='bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all ' w-80 m-auto curso> 

//         <div className='flex flex-col items-center'> 
//             <img src={testimonials.image} alt=""
//             className='rounded-full w-14' />
//             <h2 className='text-xl font-semibold mt-3'>{testimonials.name}</h2>
//             <p className='text-gray-500 mb-4'>{testimonials.role}</p>
//             <div className='flex mb-4'> 
//                 {Array(testimonials.stars).fill().map((item,index)=>(
//                     <img key = {index} src={assets.rating_star} alt="" />
//                 ))}
//             </div>
//             <p className='text-center text-sm
//               text-gray-600' >{testimonials.text}</p>
//         </div>
//        </div>
//                ))}

//         </div>
//     </div>
//   )
// }

// export default Testimonials

// // import React from 'react'
// // import { assets, testimonialsData } from '../assets/assets'

// // const Testimonials = () => {
// //   return (
// //     <div className="flex flex-col items-center justify-center my-20 px-6 xl:px-32 text-center md:text-left">
// //       <h1 className="text-4xl font-semibold mb-1">Customer Testimonials</h1>
// //       <p className="text-gray-600 mb-12">What Our Users Are Saying</p>

// //       {/* Container to align testimonials in a row */}
// //       <div className="flex flex-wrap justify-center gap-8">
// //         {testimonialsData.map((testimonials, index) => (
// //           <div
// //             key={index}
// //             className="bg-white p-8 rounded-lg shadow-lg border w-[300px] transition-transform hover:scale-105"
// //           >
// //             <div className="flex flex-col items-center">
// //               <img
// //                 src={testimonials.image}
// //                 alt={testimonials.name}
// //                 className="rounded-full w-16 h-16 object-cover mb-4"
// //               />
// //               <h2 className="text-xl font-semibold">{testimonials.name}</h2>
// //               <p className="text-gray-600 mb-2">{testimonials.role}</p>

// //               {/* Star ratings aligned in a row */}
// //               <div className="flex gap-1 mb-4">
// //                 {Array(testimonials.stars)
// //                   .fill()
// //                   .map((_, i) => (
// //                     <img
// //                       key={i}
// //                       src={assets.rating_star}
// //                       alt="star"
// //                       className="w-5 h-5"
// //                     />
// //                   ))}
// //               </div>

// //               <p className="text-sm text-gray-600 text-center">{testimonials.text}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// // export default Testimonials
  

import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div 
    initial= {{opacity: 0.2 ,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1 , y:0}}
    viewport={{once:true}}
    className="flex flex-col items-center justify-center my-20 px-6 xl:px-32 text-center md:text-left">
      <h1 className="text-4xl font-semibold mb-1">Customer Testimonials</h1>
      <p className="text-gray-600 mb-12">What Our Users Are Saying</p>

      {/* Grid layout with slightly smaller boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {testimonialsData.map((testimonials, index) => (
          <div
            key={index}
            className="bg-white p-6 max-w-[280px] mx-auto rounded-lg shadow-md border transition-transform hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonials.image}
                alt={testimonials.name}
                className="rounded-full w-14 h-14 object-cover mb-3"
              />
              <h2 className="text-lg font-semibold">{testimonials.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{testimonials.role}</p>

              <div className="flex gap-1 mb-3">
                {Array(testimonials.stars)
                  .fill()
                  .map((_, i) => (
                    <img
                      key={i}
                      src={assets.rating_star}
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
              </div>

              <p className="text-sm text-gray-600 text-center">{testimonials.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
