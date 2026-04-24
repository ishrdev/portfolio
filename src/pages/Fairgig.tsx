import TechTag from "../components/TechTag"
import logos from "../assets/logos"
import fairgigBanner from "../assets/images/fairgig/fairgig_banner.png"
import InfoArch from "../assets/images/fairgig/informationsarchitektur.png"
import LoFiDesign from "../assets/images/fairgig/lofi_wireframes.png"
import Style from "../assets/images/fairgig/visual_system.png"
import Components from "../assets/images/fairgig/ui_components.png"
import HiFiFinal from "../assets/images/fairgig/design.png"
import FigmaEmbed from "../components/FigmaEmbed"

function FairGig() {
  return (
    <>
    <div className="relative h-[50%] w-full overflow-hidden">
      <img src={fairgigBanner} alt="FairGig Banner" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-black to-transparent" />
    </div>
    <div className="flex flex-col w-full justify-center items-start px-32 py-8 gap-16 text-left">
      <div className="title text-4xl">FAIRGIG</div>
      <div className="flex w-full justify-between gap-8">
        <div className="flex flex-col w-2/3 gap-4">
          <p className="title">Used Technologies</p>
          <div className="flex flex-wrap gap-8">
            <TechTag name='Figma' icon={logos.figma}/>
            <TechTag name='Affinity' icon={logos.affinity}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3 justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="title">Project Type</p>
            <p>University Project</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Role</p>
            <p>UX/UI Designer</p>
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
            <p>2025-2026</p>
          </div>
        </div>
      </div>
      <p>In response to the growing relevance of platform-based work, I developed FairGig as part of a university project 
        focused on digital product design and user experience. The project explored how gig workers interact with data, 
        income uncertainty, and platform structures, combining research, concept development, and interface design.
      </p>
      <div className="flex flex-col gap-4">
        <h2 className="title text-lg">Project Goal</h2>
        <p>FairGig is a mobile application designed to bring transparency to the gig economy. It enables users to track 
          their earnings and expenses, compare their income anonymously with peers, and gain insights through data-driven 
          forecasts. Additionally, the app integrates community features to foster exchange, support, and collective 
          awareness among platform workers. 
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="title text-lg">Information Architecture</h2>
        <div className="flex justify-center">
          <img src={InfoArch} alt="Information Architecture" className="rounded-2xl"/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="title text-lg">Design</h2>
        <div className="flex gap-8">
          <p>The design of FairGig follows a clean and modern aesthetic, with a strong focus on clarity, accessibility, 
            and data transparency. The interface is intentionally minimal, allowing users to quickly understand their 
            financial situation without unnecessary complexity.
            A structured layout combined with soft color gradients helps guide attention toward key insights, such as 
            income comparisons and performance indicators. Visual elements like charts and highlighted metrics are designed 
            to make abstract data tangible and easy to interpret at a glance. The use of subtle contrasts and a limited color 
            palette creates a calm and trustworthy atmosphere, reinforcing the app's goal of providing reliable and transparent 
            information. Interactive elements are clearly defined and intuitive, ensuring a smooth user experience even for 
            users with varying levels of digital familiarity. Overall, the design aims to balance functionality and 
            simplicity while supporting users in making informed decisions about their work and income.
          </p>
        </div>
        <div className="flex flex-col gap-16 my-4 items-center">
          <img src={LoFiDesign} alt="Lofi Wireframes" className="rounded-2xl"/>
          <div>
            <p className="title mb-8">Visual System Library</p>
            <div className="flex gap-16">
              <img src={Style} alt="Visual System Library" className="w-1/2 rounded-2xl"/>
              <img src={Components} alt="UI Components" className="w-1/2 rounded-2xl"/>
            </div>
          </div>
          <img src={HiFiFinal} alt="Final HiFi Prototype" className="rounded-2xl"/>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="title text-lg">Clickable Prototype</div>
        <FigmaEmbed
        src="https://embed.figma.com/proto/y2AVIbu6e7DNJbO9Kfhx0P/FairGig?node-id=163-2672&p=f&viewport=-8%2C-990%2C0.32&scaling=scale-down&content-scaling=fixed&starting-point-node-id=163%3A2672&page-id=0%3A1&embed-host=share&footer=false"
        title="FairGig prototype"
        />
      </div>
    </div>
    </>
  )
}

export default FairGig
