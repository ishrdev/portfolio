import DarkVeil from '../assets/DarkVeil'
import MagicBento from '../components/MagicBento'
import logos from '../assets/logos.tsx'
import Separator from '../components/Separator.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import '../App.css'

export default function Home() {
  const designSkills = [
    {name: 'Figma', logo: logos.figma},
    {name: 'Adobe Photoshop', logo: logos.photoshop},
    {name: 'Adobe Illustrator', logo: logos.illustrator},
    {name: 'Affinity', logo: logos.affinity}
  ];

  const frontendSkills = [
    { name: 'TypeScript', logo: logos.ts },
    { name: 'JavaScript', logo: logos.js },
    { name: 'Vue.js', logo: logos.vue },
    { name: 'Vuetify', logo: logos.vuetify },
    { name: 'React', logo: logos.react },
    { name: 'TailwindCSS', logo: logos.tw },
    { name: 'HTML5', logo: logos.html },
    { name: 'CSS', logo: logos.css },
  ];

  const backendSkills = [
    {name: 'Python', logo: logos.py},
    {name: 'Java', logo: logos.jv},
    {name: 'FastAPI', logo: logos.fastapi},
    {name: 'LangChain', logo: logos.langchain}
  ]

  const dbSkills = [
    {name: 'PostgreSQL', logo: logos.postgres},
    {name: 'MySQL', logo: logos.mysql},
    {name: 'MongoDB', logo: logos.mongodb},
  ]

  const cadSkills = [
    {name: 'Autodesk Maya', logo: logos.maya},
    {name: 'Blender', logo: logos.blender},
    {name: 'Rhino 3D', logo: logos.rhino},
  ]

  const toolsSkills = [
    {name: 'Git', logo: logos.git},
    {name: 'Bitbucket', logo: logos.bitbucket},
    {name: 'Jira', logo: logos.jira},
  ]
  
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <div className='grid gap-2'>
      <div className="block absolute top-0 left-0 w-full h-screen -z-1 row-start-1 col-start-1">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={1.9}
          warpAmount={0}
        />
      </div>
      <section id='home' className='row-start-1 col-start-1 mx-32'>
        <div className='flex flex-col flex-wrap h-svh justify-evenly'>
          <div className='flex flex-col flex-wrap gap-16'>
            <div className='title text-4xl md:text-6xl -mb-8 '>ISHARA MUSIPPATHTHU</div>
            <p className='text-xl'>UX/UI Designer • Frontend Developer</p>
            <p className='text-2xl'>Designing intuitive digital experiences through user-centered design — 
              and bringing them to life with code.
            </p>
          </div>
          <div className='flex flex-col items-center py-4'>
            <p className='text-xl'>Let's connect!</p>
            <div className='flex justify-center'>
              <a href="https://www.linkedin.com/in/ishara-musippaththu" target="_blank" rel="noopener noreferrer">
                <img src={logos.linkedIn} className="logo" alt="LinkedIn logo" />
              </a>
              <a href="https://github.com/ishrdev" target="_blank" rel="noopener noreferrer">
                <img src={logos.github} className="logo" alt="Github logo" />
              </a>
            </div>
          </div>
          <div className='w-full'>
            <FontAwesomeIcon 
            icon={faAnglesDown}
            size="2xl"
            beatFade
            className='slow-beat-fade cursor-pointer mt-4'
            onClick={scrollToWork}
            />
          </div>
        </div>
      </section>
      <section id='work'className='mx-32'>
        <div className='flex flex-col items-center w-full'>
          <div className="title text-2xl text-left mb-8 w-full">SELECTED WORK</div>
          <div className='w-full flex justify-center'>
            <MagicBento 
              textAutoHide={true}
              enableStars={false}
              enableSpotlight
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect
              spotlightRadius={410}
              particleCount={12}
              glowColor="132, 0, 255"
              disableAnimations={false}
            />
          </div>
          <Link to='/work' className="text-xl mt-12 group cursor-pointer flex justify-center items-center gap-4">
            <span className='hover-animate'>See more projects</span>
            <FontAwesomeIcon
            icon={faAnglesRight}
            className='hover-animate hover-beat-fade'
            />
          </Link>
        </div>
      </section>
      <section id='skills' className='mx-32'>
        <div className='flex flex-col content-center justify-center'>
          <div className='title text-2xl text-left mb-8'>SKILLS</div>
          <div>
            <div className='flex row-start-1 items-center mb-8'>
              <div className='title text-xl text-left min-w-45'>Design</div>
              <div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-6'>
                {designSkills.map(skill => (
                  <div className='flex items-center'>
                  <img src={skill.logo} alt={skill.name} className='logo'/>{skill.name}</div>
                ))}
              </div>
            </div>
            <div className='my-8'><Separator/></div>
            <div className='flex row-start-2 items-start'>
              <div className='title text-xl text-left min-w-45'>Frontend</div>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
                {frontendSkills.map(skill => (
                  <div className='flex items-center'>
                  <img src={skill.logo} alt={skill.name} className='logo'/>{skill.name}</div>
                ))}
              </div>
            </div>
            <div className='my-8'><Separator/></div>
            <div className='flex row-start-3 items-center'>
              <div className='title text-xl text-left min-w-45'>Backend</div>
              <div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-6'>
                {backendSkills.map(skill => (
                  <div className='flex items-center'>
                  <img src={skill.logo} alt={skill.name} className='logo'/>{skill.name}</div>
                ))}
              </div>
            </div>
            <div className='my-8'><Separator/></div>
            <div className='flex row-start-4 items-center'>
              <div className='title text-xl text-left min-w-45'>Database</div>
              <div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-6 justify-evenly'>
                {dbSkills.map(skill => (
                  <div className='flex items-center'>
                  <img src={skill.logo} alt={skill.name} className='logo'/>{skill.name}</div>
                ))}
              </div>
            </div>
            <div className='my-8'><Separator/></div>
            <div className='flex row-start-5 items-center'>
              <div className='title text-xl text-left min-w-45'>CAD Modelling</div>
              <div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-6 justify-evenly'>
                {cadSkills.map(skill => (
                  <div className='flex items-center'>
                  <img src={skill.logo} alt={skill.name} className='logo'/>{skill.name}</div>
                ))}
              </div>
            </div>
            <div className='my-8'><Separator/></div>
            <div className='flex row-start-6 items-center'>
              <div className='title text-xl text-left min-w-45'>Tools</div>
              <div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-6 justify-evenly'>
                {toolsSkills.map(skill => (
                  <div className='flex items-center'>
                  <img src={skill.logo} alt={skill.name} className='logo'/>{skill.name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
