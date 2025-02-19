import React,{JSX} from 'react'
import "../Home/home.css"
import bijon from "../../assets/bijon.png"
import sideimg from "../../assets/sideimg.png"
function Home({homeref}):JSX.Element {
  return (
    <div ref={homeref} className='home w-full sm:w-full p-10 sm:p-0 h-1/3 sm:h-screen sm:flex sm:pl-30'>  
        <div className='sm:w-lg sm:pt-48'>
            <h2 className='font-semibold'>Hey, I am Bijon</h2>
            <h1 className='pt-3'>I create <span className='font-semibold wordmark'>Websites</span><br/> and Website designs</h1>
            <p className='pt-3'>I'm a frontend developer passionate about creating responsive,<br/> user-friendly, and visually appealing web experiences. I specialize in building interactive interfaces with modern technologies like React and Tailwind CSS.</p>
            <button className='border home-button rounded-lg pl-4 pt-2 pb-2 pr-4 mt-4'>Get in Touch</button>
        </div>
        <div className='sm:w-lg sm:pt-28 sm:pl-30 sm:border-l-2 sm:h-96 mt-20'>
            <div className='absolute photo-absolute'>
            <img src={sideimg} className='invisible sm:visible' alt="" />
            </div>
            <div className='photo-container w-40 h-40 sm:w-60 sm:h-60 flex'>
                 <img src={bijon} alt="" />
                 <img className='invisible sm:visible' src={sideimg} alt="" />
            </div>
            <div className='photo-container-wrapper w-40 h-40 sm:w-60 sm:h-60 -mt-36 ml-6 sm:-mt-52 sm:-ml-8'>
                
            </div>
        </div>
    </div>
  )
}

export default Home