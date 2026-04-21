import TechTag from "../components/TechTag"
import logos from "../assets/logos"
import aiBanner from "../assets/images/aiAssistant/ai_banner.png"
import Workflow from "../assets/images/aiAssistant/workflow.svg"

function AIAssistant() {
  return (
    <>
    <div className="relative h-[50%] w-full overflow-hidden">
      <img src={aiBanner} alt="AI Assistant Banner" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-black to-transparent" />
    </div>
    <div className="flex flex-col w-full justify-center items-start px-32 py-8 gap-16 text-left">
      <div className="title text-4xl">AI Invoice Assistant</div>
      <div className="flex w-full justify-between gap-8">
        <div className="flex flex-col w-2/3 gap-4">
          <p className="title">Used Technologies</p>
          <div className="flex flex-wrap gap-8">
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
        <div className="flex flex-wrap w-1/3 justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="title">Project Type</p>
            <p>University Project</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Role</p>
            <p>Fullstack Developer & UX/UI Designer</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Duration</p>
            <p>10 Weeks</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Status</p>
            <p>Completed</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Year</p>
            <p>2025</p>
          </div>
        </div>
      </div>
      <p>As part of a university project, I developed a full-stack web application featuring a RAG-based AI chatbot that 
        automates invoice creation by extracting user input and generating structured data to dynamically populate forms. 
        The project was conducted in collaboration with a German financial software company.
      </p>
      <div className="flex flex-col gap-4">
        <h2 className="title">Project Goal</h2>
        <p>Clients of the company currently have to manually fill out multiple fields to create invoices, making the process
          repetitive and time-consuming. To improve efficiency, the goal was to develop an AI-powered extension for the 
          existing web application that automates this workflow. The solution introduces a chatbot interface that processes 
          user input and automatically populates the invoice form using relevant data from the company's database, 
          reducing a multi-step process to just one or two interactions. To ensure data privacy, a local LLM was used 
          instead of external APIs, keeping sensitive customer data within the company's infrastructure. 
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="title">Workflow</h2>
        <div className="flex justify-center">
          <img src={Workflow} alt="Workflow" className="rounded-2xl" />
        </div>
      </div>
    </div>
    </>
  )
}

export default AIAssistant
