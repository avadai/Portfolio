import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

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
            value: {min: 1, max: 5}
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

      <div className="w-screen h-screen z-0">
        <div className='flex'>
        <h1 className='font-dystopia justify-start text-sky-500 uppercase text-6xl xs:text-4xl animate-pulse pl-3 md:pt-10 pt-4'>awv</h1>
          <div className="md:flex gap-8 md:pt-10 pt-1 ml-auto xs: mr-3 justify-end items-center text-center">
            <button className="cursor-pointer font-dystopia px-2 py-2 mt-2 uppercase shadow-full rounded-lg whitespace-nowrap text-sky-500 hover:text-black hover:bg-sky-500 lg:text-lg md:text-base text-xs"><FontAwesomeIcon className="pr-2" icon="fa-solid fa-house" />Home</button >
            <button className="cursor-pointer font-dystopia px-2 py-2 mt-2 uppercase shadow-full rounded-lg whitespace-nowrap text-sky-500 hover:text-black hover:bg-sky-500 lg:text-lg md:text-base text-xs"><FontAwesomeIcon className="pr-2" icon="fa-solid fa-user" />About</button >
            <button className="cursor-pointer font-dystopia px-2 py-2 mt-2 uppercase shadow-full rounded-lg whitespace-nowrap text-sky-500 hover:text-black hover:bg-sky-500 lg:text-lg md:text-base text-xs"><FontAwesomeIcon className="pr-2" icon="fa-solid fa-folder" />Resume</button >
            <button className="cursor-pointer font-dystopia px-2 py-2 mt-2 uppercase shadow-full rounded-lg whitespace-nowrap text-sky-500 hover:text-black hover:bg-sky-500 lg:text-lg md:text-base text-xs"><FontAwesomeIcon className="pr-2" icon="fa-solid fa-phone" />Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}
