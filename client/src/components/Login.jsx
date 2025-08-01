// import React, { useContext, useEffect, useState } from 'react'
// import { assets } from '../assets/assets'
// import { AppContext } from '../context/Appcontext'
// import { motion } from "motion/react"
// import axios from "axios"
// import { toast } from 'react-toastify'


// const Login = () => {
//   const [state, setState] = useState('Login')
//   const {setShowLogin,backendUrl,setToken,setUser}= useContext(AppContext)

//   const [name,setName] = useState('')
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')


//   const onSubmitHandler = async(e)=>{
//     e.preventDefault();
//     try {
//           if(state==='Login'){
//        const{data} = await axios.post(backendUrl + '/api/user/login' ,
//          {email,password})
//         if(data.success){
//                 setToken(data.token)
//                 setUser(data.user)
//                 localStorage.getItem('token',data.token)
//                 setShowLogin(false)
//                }
//           else{
//              toast.error(data.message)
//           }
//        }  
//     else{
//        const{data} = await axios.post(backendUrl + '/api/user/register' ,
//          {name,email,password})
//         if(data.success){
//                 setToken(data.token)
//                 setUser(data.user)
//                 localStorage.getItem('token',data.token)
//                 setShowLogin(false)
//         } else{
//              toast.error(data.message)
//           }
//         }  
//       }
//       catch(error) {
//           toast.error(error.message)
//     }
//   }

//   useEffect(()=>{
//       document.body.style.overflow='hidden';
//       return()=>{
//         document.body.style.overflow='unset';
//       }
//   },[])

//   return (
//     <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
//       <motion.form onSubmit={onSubmitHandler}
      
//       initial= {{opacity: 0.2 ,y:50}}
//     transition={{duration:0.3}}
//     whileInView={{opacity:1 , y:0}}
//     viewport={{once:true}}
//     className='bg-white px-8 py-8 rounded-2xl text-slate-500 w-full max-w-sm shadow-md relative'>
//         <h1 className='text-center text-2xl text-neutral-700 font-semibold mb-1'>
//           {state}
//         </h1>
//         <p className='text-center text-sm mb-4 text-gray-500'>
//           Welcome back! Please sign in to continue
//         </p>

//         {state !== 'Login' && (
//           <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-4'>
//             <img src={assets.profile_icon} alt="profile" className='w-5 h-5 opacity-60' />
//             <input onChange={e=> setName(e.target.value)} value={name}
//               type='text'
//               className='outline-none text-sm w-full'
//               placeholder='Full Name'
//             />
//           </div>
//         )}

//         <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-4'>
//           <img src={assets.email_icon} alt="email" className='w-5 h-5 opacity-60' />
//           <input onChange={e=> setEmail(e.target.value)} value={email}
//             type='email'
//             className='outline-none text-sm w-full'
//             placeholder='Email id'
//           />
//         </div>

//         <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-4'>
//           <img src={assets.lock_icon} alt="lock" className='w-5 h-5 opacity-60' />
//           <input onChange={e=> setPassword(e.target.value)} value={password}
//             type='password'
//             className='outline-none text-sm w-full'
//             placeholder='Password'
//           />
//         </div>

//         <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password</p>

//         <button className='bg-blue-600 w-full text-white py-2 rounded-full'>
//           {state === 'Login' ? 'Login' : 'Create Account'}
//         </button>

//         {state === 'Login' ? (
//           <p className='mt-5 text-center'>
//             Don't have an Account?{' '}
//             <span
//               className='text-blue-600 cursor-pointer'
//               onClick={() => setState('Sign Up')}
//             >
//               Sign Up
//             </span>
//           </p>
//         ) : (
//           <p className='mt-5 text-center'>
//             Already have an Account?{' '}
//             <span
//               className='text-blue-600 cursor-pointer'
//               onClick={() => setState('Login')}
//             >
//               Log In
//             </span>
//           </p>
//         )}

//         <img onClick={()=>setShowLogin(false)}
//           src={assets.cross_icon}
//           alt="close"
//           className='absolute top-5 right-5 w-5 h-5 cursor-pointer'
//         />
//       </motion.form>
//     </div>
//         )
     
//  }

// export default Login;
import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/Appcontext';
import { motion } from 'motion/react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token); // ✅ Fixed
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token); // ✅ Fixed
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='bg-white px-8 py-8 rounded-2xl text-slate-500 w-full max-w-sm shadow-md relative'
      >
        <h1 className='text-center text-2xl text-neutral-700 font-semibold mb-1'>{state}</h1>
        <p className='text-center text-sm mb-4 text-gray-500'>
          Welcome back! Please sign in to continue
        </p>

        {state !== 'Login' && (
          <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img src={assets.profile_icon} alt='profile' className='w-5 h-5 opacity-60' />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type='text'
              className='outline-none text-sm w-full'
              placeholder='Full Name'
            />
          </div>
        )}

        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.email_icon} alt='email' className='w-5 h-5 opacity-60' />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            className='outline-none text-sm w-full'
            placeholder='Email id'
          />
        </div>

        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.lock_icon} alt='lock' className='w-5 h-5 opacity-60' />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            className='outline-none text-sm w-full'
            placeholder='Password'
          />
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password</p>

        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        {state === 'Login' ? (
          <p className='mt-5 text-center'>
            Don't have an Account?{' '}
            <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>
              Sign Up
            </span>
          </p>
        ) : (
          <p className='mt-5 text-center'>
            Already have an Account?{' '}
            <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>
              Log In
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt='close'
          className='absolute top-5 right-5 w-5 h-5 cursor-pointer'
        />
      </motion.form>
    </div>
  );
};

export default Login;
