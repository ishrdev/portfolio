import TechTag from '../components/TechTag'
import logos from '../assets/logos'
import PortfolioBanner from '../assets/images/portfolio/portfolio_banner.png'
import OlderVer from '../assets/images/portfolio/older_version.gif'
import ProjectOld from '../assets/images/portfolio/projects_old.png'
import ProjectNew from '../assets/images/portfolio/projects_new.png'

function Portfolio() {
  return (
    <>
    <div className=" relative h-[50%] w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-linear-to-t from-transparent to-black" />
      <img src={PortfolioBanner} alt="Portfolio Banner" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-black to-transparent" />
    </div>
    <div className="flex flex-col w-full justify-center items-start px-32 py-8 gap-16 text-left">
      <div className="title text-4xl">Personal Website</div>
      <div className="flex w-full justify-between gap-8">
        <div className="flex flex-col gap-6 justify-between w-full">
          <div className="flex flex-col w-2/3 gap-4">
            <p className="title">Used Technologies</p>
            <div className="flex flex-wrap gap-8">
              <TechTag name="Figma" icon={logos.figma}/>
              <TechTag name='React' icon={logos.react}/>
              <TechTag name='Vite.js' icon={logos.vite}/>
              <TechTag name='TypeScript' icon={logos.ts}/>
              <TechTag name='TailwindCSS' icon={logos.tw}/>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Github Repo</p>
            <div className="flex items-center gap-8">
              <img src={logos.github} className="size-8" alt="Github logo" />
              <a href='https://github.com/ishrdev/portfolio' target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <span className='underline'>https://github.com/ishrdev/portfolio</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3 justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="title">Project Type</p>
            <p>Personal Project</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Role</p>
            <p>UX/UI Designer & Frontend Developer</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Status</p>
            <p>Ongoing</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Year</p>
            <p>2024-2026</p>
          </div>
        </div>
      </div>
      <p>A personal portfolio project designed to showcase my work while continuously evolving my skills as a UX/UI designer 
        and frontend developer. The project involved rebuilding and expanding a previous vanilla HTML, CSS, and JavaScript-based 
        implementation into a scalable, component-based React application. The focus was on improving user experience, 
        structure, and maintainability while creating a clean and intuitive interface to present my projects effectively.
      </p>
      <div className="flex flex-col gap-4">
        <h2 className="title text-lg">Project Goal</h2>
        <p>The goal was to create a clean, user-friendly platform to present my projects in a structured and professional 
          way, while building a scalable foundation for future improvements and expanding my frontend and UX skill set.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="title text-lg">From Previous to Current Version</h2>
        <p>The previous version of my portfolio was built using HTML, CSS, and JavaScript with a multi-page structure. 
          While functional, it lacked scalability, consistency, and maintainability. The new version is built with React, 
          enabling a component-based architecture that improves code reusability, maintainability, and overall user 
          experience.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className='flex flex-col gap-4 lg:flex'>
            <img src={ProjectOld} alt="Project View Old Version" className="rounded-2xl"/>
            <div className='flex items-center text-pretty gap-2'>
              <FontAwesomeIcon icon={faCaretRight} />
              <span>Projects were only showcased in a carousel on the main page</span>
            </div>
            <div className='flex items-center text-pretty gap-2'>
              <FontAwesomeIcon icon={faCaretRight} />
              <span>No clear overview of all available projects</span>
            </div>
          </div>
          <div className='flex flex-col gap-4 text-left'>
            <img src={ProjectNew} alt="Project View New Version" className="rounded-2xl"/>
            <div className='flex items-center text-pretty gap-2'>
              <FontAwesomeIcon icon={faCaretRight} />
              <span>Dedicated page providing a complete overview of all projects</span>
            </div>
            <div className='flex items-center text-pretty gap-2'>
              <FontAwesomeIcon icon={faCaretRight} />
              <span>Highlighted selection on the home page for quick access to key work</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <img src={OlderVer} alt="Old Portfolio Version" className="rounded-2xl mb-4"/>
            <p>Older Portfolio Version</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Portfolio
