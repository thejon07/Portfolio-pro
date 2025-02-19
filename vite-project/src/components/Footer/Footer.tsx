import React,{JSX} from 'react'
import "./footer.css"

function Footer():JSX.Element{
  return (
    <>
      <footer className='footer px-10 flex justify-between h-30 pt-20'>
     
          <div>THEJON</div>
          <div className='border-t-2 pt-2'>
              <ul className='flex gap-5 text-xs font-semibold'>
                <li>Privay Policy</li>
                <li>Cookies Setting</li>
                <li>Copyright </li>
              </ul>
          </div>
       
      </footer>
    </>
  )
}

export default Footer
