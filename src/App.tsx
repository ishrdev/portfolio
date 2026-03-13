import githubLogo from './assets/Github.svg'
import linkedInLogo from './assets/Linkedin.svg'
import DarkVeil from './assets/DarkVeil'
import Navbar from './components/Navbar'

import './App.css'

function App() {

  return (
    <div className='grid gap-2'>
      <div className="w-full h-screen -z-1 row-start-1 col-start-1">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={1.9}
          warpAmount={0}
        />
      </div>
      <div className='row-start-1 col-start-1 justify-around'>
        <Navbar/>
        <div className='flex flex-col h-svh content-center justify-evenly justify-items-center px-8'>
          <div className='flex flex-col gap-16'>
            <div className='title md:text-6xl -mb-8 text-4xl'>ISHARA MUSIPPATHTHU</div>
            <p className='text-xl'>UX/UI Designer • Frontend Developer</p>
            <p className='text-2xl'>Designing intuitive digital experiences through user-centered design — and bringing them to life with code.</p>
          </div>
          <div>
            <p className='text-xl'>Let's connect!</p>
            <div className='w-full flex align-middle justify-center'>
              <a href="https://www.linkedin.com/in/ishara-musippaththu" target="_blank">
                <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
              </a>
              <a href="https://vite.dev" target="_blank">
                <img src={githubLogo} className="logo" alt="Github logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
