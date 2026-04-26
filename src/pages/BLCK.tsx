import TechTag from "../components/TechTag"
import logos from "../assets/logos"
import blckBanner from "../assets/images/blck/blck_banner.png"
import Emma from "../assets/images/blck/Emma_Persona.jpg"
import Max from "../assets/images/blck/Max_Persona.jpg"
import UXEmma from "../assets/images/blck/CustomerJourney_Emma.jpg"
import UXMax from "../assets/images/blck/CustomerJourney_Max.jpg"
import Ideas from "../assets/images/blck/ideas.jpg"
import LoFiIdea1 from "../assets/images/blck/lofi_idea_1.jpg"
import LoFiIdea2 from "../assets/images/blck/lofi_idea_2.jpg"
import LoFiIdea3 from "../assets/images/blck/lofi_idea_3-1.png"
import LoFiIdea4 from "../assets/images/blck/lofi_idea_3-2.png"
import LoFiDecision from "../assets/images/blck/lofi_decision_review.jpg"
import LofiFinal from "../assets/images/blck/wireframes_final.png"
import BLCKDemo from "../assets/images/blck/blck_demo.gif"
import HiFiFinal from "../assets/images/blck/final_hifi_proto.png"
import FigmaEmbed from "../components/FigmaEmbed"

function BLCK() {
  return (
    <>
    <div className=" relative h-[50%] w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-linear-to-t from-transparent to-black" />
      <img src={blckBanner} alt="BLCK Mockup Shot" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-black to-transparent" />
    </div>
    <div className="flex flex-col w-full justify-center items-start px-32 py-8 gap-16 text-left">
      <div className="title text-4xl">BLCK</div>
      <div className="flex w-full justify-between gap-8">
        <div className="flex flex-col w-2/3 gap-4">
          <p className="title">Used Technologies</p>
          <div className="flex flex-wrap gap-8">
            <TechTag name="Figma" icon={logos.figma}/>
            <TechTag name='Adobe Illustrator' icon={logos.illustrator}/>
            <TechTag name='Adobe Photoshop' icon={logos.photoshop}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3 justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="title">Project Type</p>
            <p>Group Project</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Role</p>
            <p>UX/UI Designer & UX Researcher</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Duration</p>
            <p>12 Weeks</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Status</p>
            <p>Completed</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Year</p>
            <p>2024</p>
          </div>
        </div>
      </div>
      <p>In the realm of modern technology, our group undertook a captivating project to design a Graphical User 
        Interface for a smart blinds application. Assigned as a university assignment, we went through a thorough process 
        involving case studies, intensive research, and a UX interview to create an intuitive and user-friendly interface 
        that would revolutionize user interaction with smart blinds.</p>
      <div className="flex flex-col gap-4">
        <h2 className="title">Empathizing & Defining</h2>
        <p>Empathy is pivotal in UX design, fostering a deep understanding of users' needs, emotions, and behaviors. 
          By empathizing, we gain insights vital for crafting meaningful experiences. It allows stepping into users' shoes, 
          identifying pain points, and designing solutions that resonate. For this phase of the "Design-Thinking-Process" 
          we created Personas that would represent our target group.</p>
        <div className="flex gap-8 my-4">
          <img src={Emma} alt="Persona Emma Müller" className="w-1/2 rounded-2xl" />
          <img src={Max} alt="Persona Max Schmidt" className="w-1/2 rounded-2xl"  />
        </div>
        <p>In the defining process, we envisioned scenarios where users encounter challenges and how they discover our 
          product. Employing UX Maps and Customer Journey Maps, we meticulously charted user experiences to grasp the problem 
          comprehensively. These visual aids provided invaluable insights into user interactions and highlighted opportunities 
          for improvement. By understanding user journeys, we honed our understanding of user needs and devised strategies 
          to enhance their experience with our product. </p>
        <div className="flex gap-8 mt-4">
          <img src={UXEmma} alt="Customer Journey Map Emma" className="w-1/2 rounded-2xl" />
          <img src={UXMax} alt="Customer Journey Map Max" className="w-1/2 rounded-2xl"  />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="title">Ideation</h2>
        <p>During our ideation process, we gathered to brainstorm app functionalities collectively. Following that, we 
          individually sketched several screens, subsequently sharing and presenting our designs to one another. 
          This intensive session allowed us to generate a plethora of ideas. Subsequently, we meticulously assessed and 
          narrowed down our options, ensuring that only the most viable and innovative concepts proceeded to the next 
          phase of development.</p>
        <div className="flex gap-8 my-4">
          <img src={Ideas} alt="Idea Notes" className="w-1/2 rounded-2xl"  />
          <img src={LoFiDecision} alt="Screen Idea Review Notes" className="w-1/2 rounded-2xl"  />
        </div>
        <div className="flex gap-8 my-4">
          <img src={LoFiIdea1} alt="LoFi Idea 1" className="w-1/2 rounded-2xl"  />
          <img src={LoFiIdea2} alt="LoFi Idea 2" className="w-1/2 rounded-2xl"  />
        </div>
        <div className="flex gap-8 my-4">
          <img src={LoFiIdea3} alt="Lofi Idea 3_1" className="w-1/2 rounded-2xl"  />
          <img src={LoFiIdea4} alt="Lofi Idea 3_2" className="w-1/2 rounded-2xl"  />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="title">Our Solution</h2>
        <div className="flex gap-8">
          <p className="">After carefully considering the needs of our users and our conceptual ideas, we crafted a lo-fi prototype by 
          consolidating and enhancing the ideas we had developed thus far. This iterative process allowed us to refine 
          our ideas and incorporate user feedback efficiently. By creating a low-fidelity prototype, we could swiftly 
          iterate and test various design elements, ensuring that our final product would align closely with user 
          expectations and preferences.</p>
        </div>        
        <div className="flex flex-col gap-4 my-4">
          <img src={LofiFinal} alt="Final LoFi Prototype" className="rounded-2xl"  />
          <div className="flex gap-8">
            <img src={BLCKDemo} alt="BLCK Demo" className="w-1/3 rounded-2xl"  />
            <img src={HiFiFinal} alt="Final HiFi Prototype" className="w-2/3 rounded-2xl"  />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="title text-lg">Clickable Prototype</div>
          <FigmaEmbed
          src="https://embed.figma.com/proto/KbyEZriZDw4d2S7FnuL10U/Wireframes?node-id=1226-527&p=f&viewport=-272%2C-2367%2C0.43&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1226%3A619&page-id=1226%3A139&embed-host=share&footer=false"
          title="BLCK prototype"
        />
      </div>
      </div>
    </div>
    </>
  )
}

export default BLCK
