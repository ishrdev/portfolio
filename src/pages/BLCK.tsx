import TechTag from "../components/TechTag"
import logos from "../assets/logos"
import blckBanner from "../assets/images/blck/blck_banner.png"
import Emma from "../assets/images/blck/Emma_Persona.jpg"
import Max from "../assets/images/blck/Max_Persona.jpg"

function BLCK() {
  return (
    <>
    <div className=" relative h-[50%] w-full overflow-hidden">
      <img src={blckBanner} alt="BLCK Mockup Shot" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-black to-transparent" />
    </div>
    <div className="flex flex-col w-full justify-center items-start p-8 gap-16 text-left">
      <div className="title text-4xl">BLCK</div>
      <div className="flex w-full justify-between gap-8">
        <div className="flex flex-col w-2/3 gap-4">
          <p className="title">Used Technologies</p>
          <div className="flex gap-8">
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
      </div>
    </div>
    </>
  )
}

export default BLCK
