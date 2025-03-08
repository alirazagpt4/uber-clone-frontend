import React from 'react'
import { Link } from 'react-router-dom'


const Start = () => {
  return (
    <div>
      <div className=' bg-cover object-contain bg-[url(https://img.freepik.com/free-vector/taxi-app-service-concept_23-2148497472.jpg?semt=ais_hybrid)] h-screen pt-8 w-full  flex justify-between flex-col '> 
           <img className='w-14 ml-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
           <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
             <Link to='/login' className='flex items-center  justify-center w-full bg-black text-white py-3 rounded mt-5 '>Continue</Link>
           </div>
      </div>
    </div>
  )
}

export default Start
