import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import selfImage from './images/AndrewVadai.jpg'

import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import Particles from 'react-tsparticles'
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'

library.add(faGithub, faInstagram, faHouse, faUser, faFolder, faPhone)

export default function Portfolio() {

  const init = useCallback(async (engine) => {
    await loadFull(engine)
  })


  return (
    <div>
      <div className='fixed z-0 bg-black'>
      <Particles options={{
        particles: {
          color: {
            value: "#fff"
          },
          number: {
            value: 100
          },
          opacity: {
            value: {min: 0.3, max: 1}
          },
          shape: {
            type: "circle"
          },
          size: {
            value: {min: 1, max: 3}
          },
          move: {
            direction: "right",
            enable: true,
            speed: {min: 1, max: 3},
            straight: true
          },
        }
      }} 
      init={init} />
      </div>
      <div className="z-10 bg-black w-screen h-screen">
        <div className='flex'>
        <h1 className='font-dystopia justify-start text-sky-500 uppercase text-6xl xs:text-4xl animate-pulse pl-3 md:pt-10 pt-4'>awv</h1>
          <div className="md:flex gap-8 md:pt-10 pt-1 ml-auto xs: mr-3 justify-end items-center text-center">
            <button className="cursor-pointer font-dystopia px-2 py-2 mt-2 uppercase shadow-full rounded-lg whitespace-nowrap text-sky-500 hover:text-black hover:bg-sky-500 lg:text-lg md:text-base text-xs"><FontAwesomeIcon className="pr-2" icon="fa-solid fa-house" />Home</button >
            <button className="cursor-pointer font-dystopia px-2 py-2 mt-2 uppercase shadow-full rounded-lg whitespace-nowrap text-sky-500 hover:text-black hover:bg-sky-500 lg:text-lg md:text-base text-xs"><FontAwesomeIcon className="pr-2" icon="fa-solid fa-user" />About</button >
            <button className="cursor-pointer font-dystopia px-2 py-2 mt-2 uppercase shadow-full rounded-lg whitespace-nowrap text-sky-500 hover:text-black hover:bg-sky-500 lg:text-lg md:text-base text-xs"><FontAwesomeIcon className="pr-2" icon="fa-solid fa-folder" />Resume</button >
            <button className="cursor-pointer font-dystopia px-2 py-2 mt-2 uppercase shadow-full rounded-lg whitespace-nowrap text-sky-500 hover:text-black hover:bg-sky-500 lg:text-lg md:text-base text-xs"><FontAwesomeIcon className="pr-2" icon="fa-solid fa-phone" />Contact Me</button>
          </div>
        </div>
        <div className='z-10 flex pt-20 h-3/4'>
          <div className='w-[800px] h-80 mt-12 ml-10'>
            <img className='rounded-lg max-w-xs min-w-[50px]' src={selfImage} alt='Image' />
          </div>
            <div className="flex-col">
              <div className="bg-black md:pt-10 ml-11 w-3/4">
                  <p className='font-dystopia text-sky-500 lg:text-3xl text-base ml-3 mb-3'>Greetings, my name is</p>
                  <h1 className='font-dystopia animate-pulse whitespace-nowrap px-6 py-4 shadow-full rounded-lg text-sky-500 lg:text-8xl sm:text-4xl text-lg text-center'>Andrew Vadai</h1>
                  <h2 className='font-dystopia text-red-600 lg:text-3xl text-base ml-3 mt-3'>I am a Front-End Software Developer</h2>
                  <p className='font-dystopia text-white lg:text-2xl text-sm leading-10 ml-5 mt-3'>I have professional experience 
                  in <span className='font-bold text-sky-500'>React.js</span>, <span className='font-bold text-sky-500'>JavaScript</span>, <span className='font-bold text-sky-500'>CSS</span>, and <span className='font-bold text-sky-500'>TailwindCSS</span>. My current position is <span className='font-bold text-sky-500'>Front-End 
                  Developer</span> at <span className='font-bold text-sky-500'>Seminaut Inc. </span>
                  I make modifications to UI/UX at the request of the Senior Developers.</p>
              </div>
            </div>
        </div>
        <div className='h-screen bg-black'>
          <div className='w-[90%] mt-36 ml-[5%] h-screen border-2 bg-sky-500 rounded-lg'>
            
          </div>
        </div> 
      </div>
    </div>
  );
}
