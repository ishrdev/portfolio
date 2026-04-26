import TechTag from "../components/TechTag"
import logos from "../assets/logos"
import aiBanner from "../assets/images/aiAssistant/ai_banner.png"
import Workflow from "../assets/images/aiAssistant/workflow.svg"
import LeereKonvoLofi from "../assets/images/aiAssistant/leere_konvo_lofi.png"
import KonvoPDFLofi from "../assets/images/aiAssistant/konvo_mit_pdf_lofi.png"
import LofiFinal from "../assets/images/aiAssistant/lofi_final.png"
import HifiFinal from "../assets/images/aiAssistant/design_final.png"
import Invoice from "../assets/images/aiAssistant/rechnung_final.png"
import AddCustomer from "../assets/images/aiAssistant/kunde_hinzufuegen.png"
import CustomerDB from "../assets/images/aiAssistant/neukunde_mongodb.png"
import AddArticle from "../assets/images/aiAssistant/artikel_hinzufuegen.png"
import ArticleDB from "../assets/images/aiAssistant/neuartikel_mongodb.png"

function AIAssistant() {
  return (
    <>
    <div className="relative h-[50%] w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-linear-to-t from-transparent to-black" />
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
      <div className="flex flex-col gap-4">
        <h2 className="title">Design</h2>
        <div className="flex gap-8">
          <p>As this project extends an existing web application for a financial software company, I maintained the 
            established brand identity and color palette to ensure a consistent and familiar user experience. This decision 
            helps build trust and prevents confusion when introducing new functionality within the platform. I began by 
            translating my ideas into low-fidelity wireframes, drawing inspiration from the existing manual form to reuse 
            familiar patterns and create an intuitive interface.
          </p>
        </div>        
        <div className="flex gap-4 my-4">
          <img src={LeereKonvoLofi} alt="Empty Conversation Design Idea" className="w-1/2 rounded-2xl"  />
          <img src={KonvoPDFLofi} alt="Conversation Design Idea" className="w-1/2 rounded-2xl"  />
        </div>
        <div className="flex gap-4 my-4">
          <img src={LofiFinal} alt="Final LoFi Design" className="w-1/2 rounded-2xl"  />
          <img src={HifiFinal} alt="Final HiFI Design Prototype" className="w-1/2 rounded-2xl"  />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="title">Implementation</h2>
        <p>The backend of the application is built with Python and LangChain, leveraging a Retrieval-Augmented Generation 
          (RAG) approach to improve the accuracy and reliability of LLM outputs. User input is analyzed by the model to 
          extract key information such as customer, item, and quantity, which is then structured into a JSON format.
          This data is enriched through database retrieval, including fuzzy matching for item identification, and 
          validated using Pydantic before being used to dynamically populate the invoice form in the frontend. If referenced 
          data is missing, the system guides users through an interactive flow to add new entries while ensuring input 
          accuracy and preventing common LLM issues such as hallucinations.
        </p>        
        <div className="flex flex-col gap-8 my-4">
          <div className="text-center">
            <img src={Invoice} alt="Generated Invoice Example" className="rounded-2xl mb-4" />
            <p>Generating an Invoice</p>
          </div>
          <div className="flex gap-6">
            <div className="w-4/5 text-center">
              <img src={AddCustomer} alt="Add New Customer" className="rounded-2xl mb-4" />
              <p>Adding New Customer Entry</p>
            </div>
            <div className="text-center">
              <img src={CustomerDB} alt="New Customer Entry in MongoDB" className="rounded-2xl mb-4" />
              <p>New Customer Entry in MongoDB</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-4/5 text-center">
              <img src={AddArticle} alt="Add New Article" className="rounded-2xl mb-4" />
              <p>Adding New Article Entry</p>
            </div>
            <div className="text-center">
              <img src={ArticleDB} alt="New Article Entry in MongoDB" className="rounded-2xl mb-4" />
              <p>New Customer Entry in MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AIAssistant
