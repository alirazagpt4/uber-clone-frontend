import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import 'remixicon/fonts/remixicon.css'

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const ridePanelRef = useRef(null);
  const [confirmRidePopUpPanel , setConfirmRidePopUpPanel]=useState(false);
  const confirmRidePanelRef = useRef(null);

  // gsap for ridepopup panel
  useGSAP(function () {
    if (ridePopUpPanel) {
      gsap.to(ridePanelRef.current, {
        transform: 'translateY(0)'
      })

    }
    else {
      gsap.to(ridePanelRef.current, {
        transform: 'translateY(100%)'
      })

    }
  }, [ridePopUpPanel])



  // gsap for confirmridepopup panel
  useGSAP(function () {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })

    }
    else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })

    }
  }, [confirmRidePopUpPanel])


  return (
    <div className='h-screen'>
      <div className='w-screen fixed p-3 top-0 flex items-center  justify-between  '>
        <img className='w-16' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
        <Link to='/captain-login' className='h-10 w-10 bg-white flex items-center justify-center rounded-full '>
          <i className="text-lg font-medium  ri-logout-box-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://cdn.dribbble.com/userupload/22910073/file/original-f308c35778d329518ef2b88f866111ec.gif" alt="img" />
      </div>
      <div className='h-2/5 p-6 '>
        <CaptainDetails />
      </div>

      <div ref={ridePanelRef} className='fixed w-full  z-10 bg-white bottom-0 translate-y-full  px-3 py-6 pt-12'  >
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel}  setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  />
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full h-screen z-10 bg-white bottom-0 translate-y-full  px-3 py-6 pt-12'  >
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setRidePopUpPanel={setRidePopUpPanel} />
      </div>

    </div>
  )
}

export default CaptainHome
