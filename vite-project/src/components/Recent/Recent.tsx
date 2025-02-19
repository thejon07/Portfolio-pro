import React,{JSX} from 'react'
import Dreamer from "../../assets/Dreamer.png"
import pro from "../../assets/protwo.png"
import "./recent.css"
function Recent():JSX.Element{
  return (
    <div className='pl-8 sm:pl-28 mt-10 recent pt-10 pb-30'> 
       <h2 className='font-semibold border-b-2 w-28 pb-2 mb-5'>Recent Projects</h2>

       <div className='sm:flex'>

       <div className='project-card w-72 shadow-2xl pb-5'>
           <img className='h-48' src={Dreamer} alt="" />
           <h2 className='pt-2 pl-2'>Dreamers</h2>
           <p className='text-xs pl-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
        </div>

 
        <div className='project-card w-72 mt-5 sm:mt-0 sm:ml-10 shadow-2xl pb-5'>
           <img className='h-48' src={pro} alt="" />
           <h2 className='pt-2 pl-2'>Farm2live</h2>
           <p className='text-xs pl-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
        </div>

       </div>

       

    </div>
  )
}

export default Recent
