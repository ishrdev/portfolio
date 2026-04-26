import TechTag from "../components/TechTag"
import logos from "../assets/logos"
import Cover from "../assets/images/passport/passport_cover.png"
import Intro from "../assets/images/passport/passport_introduction.png"
import ID from "../assets/images/passport/passport_id.png"
import Visa from "../assets/images/passport/passport_visa.png"


function Passport() {
  return (
    <>
    <div className="flex flex-col w-full justify-center items-start px-32 py-8 gap-16 text-left">
      <div className="title text-4xl">FICTIVE PASSPORT OF 'OCEANIA SEA'</div>
      <div className="flex w-full justify-between gap-8">
        <div className="flex flex-col w-2/3 gap-4">
          <p className="title">Used Technologies</p>
          <div className="flex flex-wrap gap-8">
            <TechTag name='Adobe Illustrator' icon={logos.illustrator}/>
            <TechTag name='Adobe Photoshop' icon={logos.photoshop}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3 justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="title">Project Type</p>
            <p>University Project</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Role</p>
            <p>Graphic Designer</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Duration</p>
            <p>2 Weeks</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Status</p>
            <p>Completed</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Year</p>
            <p>2022</p>
          </div>
        </div>
      </div>
      <p>For my university assignment, I crafted a passport tailored to an imaginary underwater realm. This project 
        challenged me to blend creativity with practicality, envisioning a document reflective of the unique environment
        it represents.</p>
      <div className="flex flex-col gap-4">
        <h2 className="title text-lg">Design</h2>
        <p>Utilizing Adobe Photoshop and Illustrator, I transformed myself into an underwater
          creature for this project. This marked my first extensive foray into self-editing. Though initially challenging,
          I gradually mastered the techniques. For privacy, I omitted my face from the edited photo displayed below.</p>
        <div className="flex gap-8 my-4">
          <img src={Cover} alt="Passport Cover" className="w-1/2 rounded-2xl" />
          <img src={Intro} alt="Passport Introduction Text" className="w-1/2 rounded-2xl" />
        </div>
        <div className="flex gap-8 my-4">
          <img src={ID} alt="Passport ID Page" className="w-1/2 rounded-2xl" />
          <img src={Visa} alt="Passport Visa Stamping" className="w-1/2 rounded-2xl" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Passport
