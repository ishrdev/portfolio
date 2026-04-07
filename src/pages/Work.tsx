import Card from '../components/Card'
import TechTag from '../components/TechTag'
import logos from '../assets/logos'

function Work() {
  return(
    <>
      <div className="flex flex-col w-full justify-center items-center-safe p-8 gap-16">
        <h1 className='title md:text-6xl text-4xl text-left w-full'>MY WORK</h1>
        <p className='text-left w-full'>Browse through my projects and get to know my working process!</p>
        <div className='flex flex-col w-full gap-8'>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="FairGig"
                route="/projects/fairgig"
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>FairGig</h2>
              <p>Tracking and comparing income based on anonymous data</p>
              <div className='flex flex-wrap w-full gap-4'>
                <TechTag name='Figma' icon={logos.figma}/>
                <TechTag name='Affinity' icon={logos.affinity}/>
              </div>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="AI-Chatbot"
                route="/projects/ai-chatbot"
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>AI-Chatbot</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos qui? Iusto repudiandae minus, 
                ipsa placeat quasi aspernatur inventore mollitia. Reprehenderit quaerat accusamus sapiente vero aperiam 
                repellendus vitae soluta eius!</p>
              <div className='flex flex-wrap w-full gap-4'>
                <TechTag name='React' icon={logos.react}/>
                <TechTag name='Next.js' icon={logos.nextjs}/>
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
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>BLCK</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos qui? Iusto repudiandae minus, 
                ipsa placeat quasi aspernatur inventore mollitia. Reprehenderit quaerat accusamus sapiente vero aperiam 
                repellendus vitae soluta eius!</p>
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
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>Animated 3D Zoetrope</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos qui? Iusto repudiandae minus, 
                ipsa placeat quasi aspernatur inventore mollitia. Reprehenderit quaerat accusamus sapiente vero aperiam 
                repellendus vitae soluta eius!</p>
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
                title="Onirique"
                route="/projects/onirique-hotels"
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>Onirique Hotels</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos qui? Iusto repudiandae minus, 
                ipsa placeat quasi aspernatur inventore mollitia. Reprehenderit quaerat accusamus sapiente vero aperiam 
                repellendus vitae soluta eius!</p>
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
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>Fictive Passport of 'Oceania Sea'</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos qui? Iusto repudiandae minus, 
                ipsa placeat quasi aspernatur inventore mollitia. Reprehenderit quaerat accusamus sapiente vero aperiam 
                repellendus vitae soluta eius!</p>
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