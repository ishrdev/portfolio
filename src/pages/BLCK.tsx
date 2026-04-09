import TechTag from "../components/TechTag"
import logos from "../assets/logos"

function BLCK() {
  return (
    <>
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
    </div>
    </>
  )
}

export default BLCK
