import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full '>
        <i className="text-lg font-medium  ri-home-5-line"></i>
        </Link>
     <div className='h-1/2'>
        <img  className='h-full w-full object-cover' src="https://cdn.dribbble.com/userupload/22910073/file/original-f308c35778d329518ef2b88f866111ec.gif" alt="img" />
     </div>
     <div className='h-1/2 p-5'>
     <div className='flex items-center justify-between'>
                    <img className='h-18' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="Confirm car img" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Ali Raza</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP XP 123</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>

                    </div>
                </div>

                <div className='flex flex-col gap=5 items-center justify-center'>
                    <div className='w-full mt-5'>
                        
                        <div className='flex gap-5 items-center p-3 border-b-1 border-gray-400 '>
                            <i className="ri-map-pin-user-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium mb-1'> 516/11-A</h3>
                                <p className='text-md  -mt-1 text-gray-600 '>Bengaluru, Karnataka</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center p-3  '>
                            <i className="ri-currency-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium mb-1'>RS.193</h3>
                                <p className='text-md  -mt-1 text-gray-600 '>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
          <button className='mb-4 w-full bg-green-500 text-white font-semibold p-2 rounded-lg mt-2'>Make a Payment</button>
     </div>
    </div>
  )
}

export default Riding
