import React, { JSX } from 'react'

function About({aboutref}): JSX.Element {
    return (
        <>
        <section ref={aboutref} className='pl-8 sm:pl-28 pt-10'>
        <h2 className='font-semibold border-b-2 w-22'>About Me</h2>
            <p className='pt-5'>I'm Bijon Mangang, a frontend developer passionate about crafting dynamic and responsive web experiences.<br/> Proficient in JavaScript and TypeScript, I specialize in building interactive interfaces. I work with React, Redux Toolkit,<br/> and various modern libraries to create efficient and scalable applications.My focus is on ,<br/>delivering seamless user experiences with clean and maintainable code.</p>
        </section>
        </>

    )
}

export default About
