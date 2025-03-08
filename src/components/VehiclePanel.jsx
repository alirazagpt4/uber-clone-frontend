import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <div ref={props.vehiclePanelRef} className='fixed w-full  z-10 bg-white bottom-0 translate-y-full  px-3 py-6 pt-12'>
         <h5 onClick={
          ()=>{
            props.setVehiclePanel(false);
          }
         } className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-300  ri-arrow-down-wide-fill"></i></h5>
         <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
          <div onClick={()=>{
            props.setConfirmRide(true)
          }} className='flex flex-row  items-center  mb-2 justify-between p-3 border-1 border-gray-300 active:border-1 active:border-black rounded-xl  '>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="car img" />
            <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>UberGo <span><i class="ri-user-3-fill">4</i></span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordadble Compact Rides.</p>
            </div>
          <h2 className='text-lg font-semibold'>Rs.193</h2>
          </div>
          <div onClick={()=>{
            props.setConfirmRide(true)
          }} className='flex flex-row  items-center  mb-2 justify-between p-3 border-1 border-gray-300 active:border-1 active:border-black rounded-xl  '>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="car img" />
            <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>Moto <span><i class="ri-user-3-fill">1</i></span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordadble MotorCycle Rides.</p>
            </div>
          <h2 className='text-lg font-semibold'>Rs.65</h2>
          </div>
          <div onClick={()=>{
            props.setConfirmRide(true)
          }} className='flex flex-row  items-center  mb-2 justify-between p-3 border-1 border-gray-300 active:border-1 active:border-black rounded-xl  '>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car img" />
            <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>Auto <span><i class="ri-user-3-fill">3</i></span></h4>
            <h5 className='font-medium text-sm'>1 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordadble UberAuto Rides.</p>
            </div>
          <h2 className='text-lg font-semibold'>Rs.87</h2>
          </div>
      </div>
    </div>
  )
}

export default VehiclePanel
