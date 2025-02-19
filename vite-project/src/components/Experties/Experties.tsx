import React,{JSX} from 'react'
import "./expert.css"
import exone from "../../assets/ex-1.png"
import extwo from "../../assets/web.png"
import ui from "../../assets/ui.png"
import tech from "../../assets/tech.png"
function Experties():JSX.Element {
  return (
    <>
     
         <h2 className='pl-10 sm:pl-30 mt-20'>My Skills</h2>
         <h1 className='pl-10 sm:pl-30 mt-2'>My Expertise</h1>
    <section className='sm:flex pl-6 sm:pl-26 mt-5 mb-10'>
        <div className='card w-60 m-4 p-4'>
            <div className='bg-white w-8'>
            <img src={exone} alt="exone" />
            </div>
         
            <h2 className='font-semibold'>Web Design</h2>
            <p className='text-xs'>I specialize in web design using React, crafting sleek, responsive, and user-friendly interfaces. My expertise lies in combining modern UI/UX principles with efficient component-based development.</p>
        </div>
        <div className='card w-60 m-5 p-4'>
            <div className='bg-white w-8'>
            <img src={extwo} alt="exone" />
            </div>
         
            <h2 className='font-semibold'>Web Development</h2>
            <p className='text-xs'> skilled in building dynamic and responsive websites with modern technologies. From frontend design with React to seamless user experiences, I focus on creating fast and efficient web applications.</p>
        </div>
        <div className='card w-60 m-5 p-4'>
            <div className='bg-white w-8'>
            <img src={ui} alt="exone" />
            </div>
         
            <h2 className='font-semibold'>UI Design</h2>
            <p className='text-xs'>I have a keen eye for UI design, creating clean, intuitive, and visually appealing interfaces. My focus is on user-centered design, ensuring seamless experiences with modern aesthetics and functionality.</p>
        </div>
        <div className='card w-60 m-5 p-4'>
            <div className='bg-white w-8'>
            <img src={tech} alt="exone" />
            </div>
         
            <h2 className='font-semibold'>Tech Stack</h2>
            <p className='text-xs'>
              Language: Javascript,Typescript<br/>
              Markup Language: HTML<br/>
              Framework: React,Tailwind CSS, Bootstrap,Redux-toolkit,Mui,Gsap<br/>
              backend(Basic):Express js, MongoDB
            </p>
        </div>
      </section>
    </>
  )
}

export default Experties
