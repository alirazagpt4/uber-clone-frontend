import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'


const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false) 
    const finishRidePanelRef = useRef(null)



     // gsap for ridepopup panel
  useGSAP(function () {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)'
      })

    }
    else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)'
      })

    }
  }, [finishRidePanel])


  return (
    <div className='h-screen'>
    <div className='w-screen fixed p-3 top-0 flex items-center  justify-between  '>
      <img className='w-16' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
      <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full '>
        <i className="text-lg font-medium  ri-logout-box-line"></i>
      </Link>
    </div>
    <div className='h-4/5'>
      <img className='h-full w-full object-cover' src="https://cdn.dribbble.com/userupload/22910073/file/original-f308c35778d329518ef2b88f866111ec.gif" alt="img" />
    </div>
    <div className='h-1/5 flex items-center justify-between relative p-6 ' onClick={()=>{
        setFinishRidePanel(true)
    }}>
    <h5 onClick={
                    () => {
                        
                    }
                } className='p-1 text-center w-[90%] absolute top-0 '><i className="text-3xl text-black-300  ri-arrow-up-wide-fill"></i></h5>
       <h4 className='text-xl mt-3 font-medium'>
            4 KM Away
       </h4>
       <button className='bg-green-500 text-white font-semibold p-3 px-10 rounded-lg mt-3 '>Complete Ride</button>
    </div>

    <div ref={finishRidePanelRef} className='fixed w-full  z-10 bg-white bottom-0 translate-y-full  px-3 py-6 pt-12'  >
        <FinishRide setFinishRidePanel={setFinishRidePanel}  />
      </div>

   

  </div>
  )
}

export default CaptainRiding
