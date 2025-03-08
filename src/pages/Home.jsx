import React, {  useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import WaitForDriver from '../components/WaitForDriver';
import LookingForDriver from '../components/LookingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel , setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const [confirmRide , setConfirmRide] = useState(false);
  const confirmRideRef = useRef(null);

  const [vehicleFound , setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);


  const [waitingDriver , setWaitingDriver] = useState(false);
  const waitingDriverRef = useRef(null);



  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)




  const submitHandler = (e) => {
    e.preventDefault();

  }

  // gsap for panel
  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 28
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0%'

      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])


  // gsap for vehicle panel

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current ,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current ,{
        transform:'translateY(100%)'
      })
    }
  } , [vehiclePanel])


// gsap for confirm ride 
  useGSAP(function(){
    if(confirmRide){
      gsap.to(confirmRideRef.current ,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRideRef.current ,{
        transform:'translateY(100%)'
      })
    }
  } , [confirmRide])


  // gsap for looking for a driver
  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current ,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(vehicleFoundRef.current ,{
        transform:'translateY(100%)'
      })
    }
  } , [vehicleFound])


  // gsap for waiting for a driver
  useGSAP(function(){
    if(waitingDriver){
      gsap.to(waitingDriverRef.current ,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(waitingDriverRef.current ,{
        transform:'translateY(100%)'
      })
    }
  } , [waitingDriver])


  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="img" />
      <div onClick={()=>{
        setPanelOpen(false);
      }} className='h-screen w-screen'>
        <img className="h-full w-full object-cover" src='https://www.shutterstock.com/image-vector/online-ordering-taxi-car-rent-600nw-1490648672.jpg' alt="map img" />
      </div>
      <div className=' flex flex-col justify-end  h-screen absolute top-0 w-full '>
        <div className='h-[30%] bg-white p-5 relative'>
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className='absolute  opacity-0  right-6 top-6 text-2xl '>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a Trip</h4>

          <form onSubmit={(e) => {
            submitHandler(e);
          }}>

            <div className='line absolute h-16 w-0.5 top-[45%] left-10 bg-gray-700 rounded-full '></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-5'
              type="text"
              placeholder='Add a Pickup location.' />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3'
              type="text"
              placeholder='Enter your destination.' />
          </form>
        </div>
        {/* conditional rendering applied here  */}
        {panelOpen &&
          <div ref={panelRef} className=' bg-white h-0'>
            <LocationSearchPanel  setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
          </div>}
      </div>
        
      
        <VehiclePanel setConfirmRide={setConfirmRide} setVehiclePanel={setVehiclePanel} vehiclePanelRef={vehiclePanelRef} />

        <ConfirmRide setConfirmRide={setConfirmRide} confirmRideRef={confirmRideRef} setVehicleFound={setVehicleFound}/>

        <WaitForDriver setWaitingDriver={setWaitingDriver} waitingDriverRef={waitingDriverRef} />

        <LookingForDriver  setVehicleFound={setVehicleFound}  vehicleFoundRef={vehicleFoundRef}/>
       
      
    </div>
  )
}

export default Home
