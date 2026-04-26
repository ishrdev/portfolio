import TechTag from "../components/TechTag"
import logos from "../assets/logos"
import oniriqueBanner from "../assets/images/onirique/onirique_banner.png"
import logoIdeas from "../assets/images/onirique/logo_ideas.jpg"
import mainPage from "../assets/images/onirique/main_page.jpg"
import roomsPage from "../assets/images/onirique/rooms_page.jpg"
import bookingPage from "../assets/images/onirique/booking_page.jpg"
import style from "../assets/images/onirique/style_guide.png"
import mockupDemo from "../assets/images/onirique/onirique_gif.gif"

function Onirique() {
  return (
    <>
    <div className=" relative h-[50%] w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-linear-to-t from-transparent to-black" />
      <img src={oniriqueBanner} alt="Onirique Banner" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-black to-transparent" />
    </div>
    <div className="flex flex-col w-full justify-center items-start px-32 py-8 gap-16 text-left">
      <div className="title text-4xl">ONIRIQUE HOTELS</div>
      <div className="flex w-full justify-between gap-8">
        <div className="flex flex-col w-2/3 gap-4">
          <p className="title">Used Technologies</p>
          <div className="flex flex-wrap gap-8">
            <TechTag name="Figma" icon={logos.figma}/>
            <TechTag name='Adobe Illustrator' icon={logos.illustrator}/>
            <TechTag name='Adobe Photoshop' icon={logos.photoshop}/>
            <TechTag name='Rhino3D' icon={logos.rhino}/>
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
            <p>7 Weeks</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Status</p>
            <p>Completed</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Year</p>
            <p>2023</p>
          </div>
        </div>
      </div>
      <p>I conceptualized a business idea for a university project centered on an imaginary underwater world. 
        Designing a website for my luxury hotel brand, Onirique (meaning "dreamlike" in French), I aimed to evoke familiarity
        amidst opulence. Crafting an experience that harmonized with the fantastical underwater landscape, I envisioned
        a haven where guests could indulge in luxury while feeling right at home.</p>
      <div className="flex flex-col gap-4">
        <h2 className="title">Ideation</h2>
        <p>Prior to website development, I focused on crafting a logo that resonated with the hotel brand.
          Exploring multiple concepts, I selected one that harmonized seamlessly with the hotel's name. 
          Subsequently, I outlined wireframes for key website pages, ensuring a cohesive and user-friendly layout.</p>
        <div className="flex gap-8 my-4">
          <img src={logoIdeas} alt="Logo Ideation Process" className="w-1/2 rounded-2xl" />
          <img src={mainPage} alt="Hotel Main Page" className="w-1/2 rounded-2xl"  />
        </div>
        <div className="flex gap-8 my-4">
          <img src={roomsPage} alt="Hotel Rooms Overview Page" className="w-1/2 rounded-2xl" />
          <img src={bookingPage} alt="Hotel Booking Process Page" className="w-1/2 rounded-2xl"  />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="title">Design</h2>
        <p>For the design phase, I curated a color palette evoking luxury and cleanliness. I aimed for a cohesive visual
          identity, which I achieved through selecting fonts that embodied these qualities. Additionally, I utilized
          interior design software to personally craft each room, leveraging existing knowledge.</p>
        <div className="flex flex-col gap-8 my-4">
          <img src={style} alt="Style Guide" className="rounded-2xl"  />
          <img src={mockupDemo} alt="Onirique Hotels Demo" className=" rounded-2xl"  />
        </div>
      </div>
    </div>
    </>
  )
}

export default Onirique
