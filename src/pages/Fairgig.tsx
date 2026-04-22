import TechTag from "../components/TechTag"
import logos from "../assets/logos"

function FairGig() {
  return (
    <>
    <div className="flex flex-col w-full justify-center items-start px-32 py-8 gap-16 text-left">
      <div className="title text-4xl">FairGig</div>
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
    </div>
    </>
  )
}

export default FairGig
