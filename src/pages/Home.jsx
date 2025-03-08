import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel , setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)




  const submitHandler = (e) => {
    e.preventDefault();

  }

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

      <div ref={vehiclePanelRef} className='fixed w-full  z-10 bg-white bottom-0 translate-y-full  px-3 py-10'>
         <h5 onClick={
          ()=>{
            setVehiclePanel(false);
          }
         } className='p-1 text-center w-[93%] absolute top-0 '><i className="text-3xl text-gray-300  ri-arrow-down-wide-fill"></i></h5>
         <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
          <div className='flex flex-row  items-center  mb-2 justify-between p-3 border-1 border-gray-300 active:border-1 active:border-black rounded-xl  '>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="car img" />
            <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>UberGo <span><i class="ri-user-3-fill">4</i></span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordadble Compact Rides.</p>
            </div>
          <h2 className='text-lg font-semibold'>Rs.193</h2>
          </div>
          <div className='flex flex-row  items-center  mb-2 justify-between p-3 border-1 border-gray-300 active:border-1 active:border-black rounded-xl  '>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="car img" />
            <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-lg'>Moto <span><i class="ri-user-3-fill">1</i></span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordadble MotorCycle Rides.</p>
            </div>
          <h2 className='text-lg font-semibold'>Rs.65</h2>
          </div>
          <div className='flex flex-row  items-center  mb-2 justify-between p-3 border-1 border-gray-300 active:border-1 active:border-black rounded-xl  '>
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

export default Home
