import Card from '../components/Card'
import TechTag from '../components/TechTag'
import logos from '../assets/logos'
import fairgig from '../assets/images/fairgig/fairgig_cover.png'
import aiAssistant from '../assets/images/aiAssistant/ai_assistant_cover.png'
import blck from '../assets/images/blck/blck_mockup.png'
import zoetrope from '../assets/images/zoetrope/zoetrope_cover.png'
import onirique from '../assets/images/onirique/onirique_cover_shot.png'
import passport from '../assets/images/passport/passport_shot.png'

function Work() {
  return(
    <>
      <div className="flex flex-col w-full justify-center items-center-safe px-32 py-8 gap-16">
        <h1 className='title text-left w-full'>MY WORK</h1>
        <p className='text-left w-full'>
          Explore a selection of projects showcasing my work in UX/UI design, frontend 
          development, and interactive digital experiences.
        </p>
        <div className='flex flex-col w-full gap-8'>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="FairGig"
                route="/projects/fairgig"
                image={fairgig}
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>FairGig</h2>
              <p>A UX/UI design project focused on developing a mobile app for gig workers that enables income tracking, 
                anonymized pay comparison, and data-driven insights to increase transparency in platform-based work.
              </p>
              <div className='flex flex-wrap w-full gap-4'>
                <TechTag name='Figma' icon={logos.figma}/>
                <TechTag name='Affinity' icon={logos.affinity}/>
              </div>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="AI Invoice Assistant"
                route="/projects/ai-chatbot"
                image={aiAssistant}
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>AI Invoice Assistant</h2>
              <p>A full-stack project focused on building a RAG-based AI chatbot that automates invoice creation by 
                extracting user input and generating structured data to dynamically populate forms.</p>
              <div className='flex flex-wrap w-full gap-4'>
                <TechTag name='React' icon={logos.react}/>
                <TechTag name='Next.js' icon={logos.nextjs}/>
                <TechTag name='TailwindCSS' icon={logos.tw}/>
                <TechTag name='shadcn/ui'/>
                <TechTag name='Python' icon={logos.py}/>
                <TechTag name='LangChain' icon={logos.langchain}/>
                <TechTag name='FastAPI' icon={logos.fastapi}/>
                <TechTag name='MongoDB' icon={logos.mongodb}/>
                <TechTag name='Figma' icon={logos.figma}/>
                <TechTag name='Adobe Illustrator' icon={logos.illustrator}/>
              </div>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="BLCK"
                route="/projects/blck"
                image={blck}               
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>BLCK</h2>
              <p>A UX/UI design project focused on developing a smart blinds control app, driven by in-depth user research, 
                personas, and journey mapping to create an intuitive and user-centered experience.</p>
              <div className='flex flex-wrap w-full gap-4'>
                <TechTag name='Figma' icon={logos.figma}/>
                <TechTag name='Adobe Illustrator' icon={logos.illustrator}/>
                <TechTag name='Adobe Photoshop' icon={logos.photoshop}/>
              </div>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="Portfolio"
                route="/projects/portfolio"
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>Personal Website</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos qui? Iusto repudiandae minus, 
                ipsa placeat quasi aspernatur inventore mollitia. Reprehenderit quaerat accusamus sapiente vero aperiam 
                repellendus vitae soluta eius!</p>
              <div className='flex flex-wrap w-full gap-4'>
                <TechTag name='Figma' icon={logos.figma}/>
                <TechTag name='React' icon={logos.react}/>
                <TechTag name='Vite.js' icon={logos.vite}/>
                <TechTag name='TypeScript' icon={logos.ts}/>
                <TechTag name='TailwindCSS' icon={logos.tw}/>
              </div>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="3D Zoetrope"
                route="/projects/zoetrope"
                image={zoetrope}
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>Animated 3D Zoetrope</h2>
              <p>A university project focused on designing and animating a 3D zoetrope using Autodesk Maya. The project 
                combines 3D modeling, animation, and a hand-crafted image sequence to recreate the illusion of motion 
                within a classic animation device.</p>
              <div className='flex flex-wrap w-full gap-4'>
                <TechTag name='Autodesk Maya' icon={logos.maya}/>
                <TechTag name='Adobe Photoshop' icon={logos.photoshop}/>
                <TechTag name='Adobe Illustrator' icon={logos.illustrator}/>
              </div>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="Onirique Hotels"
                route="/projects/onirique-hotels"
                image={onirique}
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>Onirique Hotels</h2>
              <p>A conceptual project exploring the design of a luxury hotel brand and website set in an imaginary 
                underwater world, combining branding, UI design, and user-centered thinking.</p>
              <div className='flex flex-wrap w-full gap-4'>
                <TechTag name='Figma' icon={logos.figma}/>
                <TechTag name='Adobe Photoshop' icon={logos.photoshop}/>
                <TechTag name='Adobe Illustrator' icon={logos.illustrator}/>
                <TechTag name='Rhino3D' icon={logos.rhino}/>
              </div>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="Fictive Passport"
                route="/projects/fictive-passport"
                image={passport}
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>Fictive Passport of 'Oceania Sea'</h2>
              <p>A project focused on designing a fictional passport for an underwater world. The project 
                combines creative visual design with functional elements, including a multi-page layout, thematic 
                illustrations, and security-inspired details.</p>
              <div className='flex flex-wrap w-full gap-4'>
                <TechTag name='Adobe Photoshop' icon={logos.photoshop}/>
                <TechTag name='Adobe Illustrator' icon={logos.illustrator}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
