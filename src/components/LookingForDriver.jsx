import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
            <div  ref={props.vehicleFoundRef} className='fixed w-full  z-10 bg-white bottom-0 translate-y-full  px-3 py-6 pt-12'>
            <h5 onClick={
                    () => {
                        props.setVehicleFound(false);
                    }
                } className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-300  ri-arrow-down-wide-fill"></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>
                <div className='flex flex-col gap=5 items-center justify-center'>
                    <img className='h-25' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="Confirm car img" />
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
                    </div>
            </div>
        </div>
  )
}

export default LookingForDriver
