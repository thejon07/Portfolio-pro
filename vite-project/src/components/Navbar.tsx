import React, { JSX, useEffect, useState } from 'react'
import gsap from 'gsap'
import "../components/Navbar/navbar.css"
import bar from "../assets/bar.svg"
import logo from "../assets/logo.png"

function Navbar({scrollToAbout,scrolltohome,scrolltocontact}): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(false)

  useEffect(() => {
    if (toggle) {
      gsap.fromTo(
        ".dropdown",
        { y: 30, opacity: 0 }, // Initial state (hidden and slightly moved)
        {
          duration: 0.5, // Duration of animation
          ease: "power1.out", // Easing function
          y: 50, // Final position (y-axis movement)
          opacity: 1, // Fade in (opacity: 1)
        }
      );
    }
  }, [toggle]);


  return (
    <>
      <nav className='flex w-full justify-between sm:p-4 sm:shadow-2xl overflow-hidden'>
          <h2 className='mt-2 ml-4 font-semibold sm:mt-0 sm:ml-0 sm:ml-10'>THEJON</h2>
        <div>
          <ul className='flex gap-6 p-2 invisible sm:visible'>

            <li onClick={scrolltohome} >Home</li>
            <li onClick={scrollToAbout}>About Me</li>
            <li onClick={scrollToAbout}>Projects</li>
          </ul>
        </div>
        <div className='mr-10 invisible sm:visible contact rounded-lg p-2 pl-4 pr-4'>
          <button onClick={scrolltocontact} className='bg-transparent'>Contact</button>
        </div>
        <div className='hamburger'>
          <button onClick={() => setToggle((prev) => !prev)} className="block"><img className='w-10 h-10' src={bar} alt="burger" /></button>
        </div>
      </nav>
      {
        toggle ? <div className='dropdown pl-2 -mt-10 h-44'>
          <ul className=' p-2'>
            <li>Home</li>
            <li className='pt-2'>About Me</li>
            <li className='pt-2'>Testimonials</li>
            <div className='mr-10 contact w-full mt-4 rounded-lg p-2 pl-4 pr-4'>
              <button className='bg-transparent'>Contact</button>
            </div>
          </ul>
        </div>
          :
          ""
      }


    </>
  )
}

export default Navbar
