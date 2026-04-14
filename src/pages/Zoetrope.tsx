import TechTag from "../components/TechTag"
import logos from "../assets/logos"
import ZoetropeGIF from "../assets/images/zoetrope/zoetrope_gif.gif"

function Zoetrope() {
  return (
    <>
    <div className=" relative h-[50%] w-full overflow-hidden">
      <img src={ZoetropeGIF} alt="BLCK Mockup Shot" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-black to-transparent" />
    </div>
    <div className="flex flex-col w-full justify-center items-start px-32 py-8 gap-16 text-left">
      <div className="title text-4xl">3D ZOETROPE</div>
      <div className="flex w-full justify-between gap-8">
        <div className="flex flex-col w-2/3 gap-4">
          <p className="title">Used Technologies</p>
          <div className="flex flex-wrap gap-8">
            <TechTag name='Adobe Illustrator' icon={logos.illustrator}/>
            <TechTag name='Adobe Photoshop' icon={logos.photoshop}/>
            <TechTag name='Autodesk Maya' icon={logos.maya}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3 justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="title">Project Type</p>
            <p>University Project</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="title">Role</p>
            <p>Graphic Designer & 3D Modeller</p>
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
            <p>2023</p>
          </div>
        </div>
      </div>
      <p>For a university assignment, I constructed a zoetrope from scratch, complete with a hand-drawn animation. 
        When the zoetrope rotates, the animation loops, bringing the illusion of motion to life within this classic 
        animation device.</p>
    </div>
    </>
  )
}

export default Zoetrope
