import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props);
    //  sample data array of loactions
    const locations = [
        'Near Ittefaq town , Khurrianwala , Faisalabad.',
        'Near Faisalabad Railway Station , Faisalabad.',
        'Near 14th Street pizza Canal Road , Faisalabad.',
        'Near KFC D-Ground , People Colony , Faisalabad.',
    ];


  return (
    <div>
        {
            locations.map(function(element , key){
                return <div key={key} onClick={()=>{
                    props.setVehiclePanel(true);
                    props.setPanelOpen(false);
                }} className='flex border-1 border-gray-300  rounded-xl active:border-1 active:border-black p-4 items-center gap-4 my-4 justify-center'>
                <h2 className='bg-[#eeeeee] h-10 w-16 flex items-center justify-center rounded-full '>
                <i class="ri-map-pin-line"></i>
                </h2>
                <h4>
                    {element}
                </h4>
            </div>
            })
        }


       

    </div>
  )
}

export default LocationSearchPanel
