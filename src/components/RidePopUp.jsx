import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
          <h5 onClick={
                    () => {
                        props.setRidePopUpPanel(false);
                    }
                } className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-300  ri-arrow-down-wide-fill"></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
                <div className='flex items-center justify-between bg-yellow-300 p-4 rounded-lg mt-4'>
                    <div className='flex items-center gap-3 '>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt="people img" />
                     <h2 className='text-xl font-medium'>Sarthak</h2>
                    </div>
                    <h5 className='text-lg font-semibold'>2.2 km</h5>
                </div>
                <div className='flex flex-col gap=5 items-center justify-center'>
                    <div className='w-full mt-5'>
                        <div className='flex gap-5 items-center p-3 border-b-1 border-gray-400 '>
                            <i className=" text-lg ri-map-pin-5-line"></i>
                            <div>
                                <h3 className='text-lg font-medium mb-1'> 516/11-A</h3>
                                <p className='text-md  -mt-1 text-gray-600 '>Bengaluru, Karnataka</p>
                            </div>
                        </div>
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
                    <button onClick={()=>{
                        props.setConfirmRidePopUpPanel(true);
                       
                    }} className='w-full bg-green-500 text-white font-semibold p-2 rounded-lg mt-2'>Accept</button>
                    <button onClick={()=>{
                        props.setRidePopUpPanel(false);
                    }} className='w-full bg-gray-300 text-gray-600 font-semibold p-2 rounded-lg mt-2'>Ignore</button>
                </div>
    </div>
  )
}

export default RidePopUp
    