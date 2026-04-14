import TechTag from "../components/TechTag"
import logos from "../assets/logos"
import ZoetropeGIF from "../assets/images/zoetrope/zoetrope_gif.gif"
import Isometric from "../assets/images/zoetrope/isometric_view.png"
import Cogwheels from "../assets/images/zoetrope/cogwheels.png"
import UVStrip from "../assets/images/zoetrope/uv_strip.png"

function Zoetrope() {
  return (
    <>
    <div className=" relative h-[50%] w-full overflow-hidden">
      <img src={ZoetropeGIF} alt="Zoetrope Animation GIF" className="w-full h-full object-cover" />
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
      <div className="flex flex-col gap-4">
        <h2 className="title">Modelling</h2>
        <div className="flex gap-8">
          <p className="text-balance">For the project, we were tasked to use Maya. Independently, I constructed the zoetrope, facing challenges 
          in sourcing reference images. Later, our professor prompted us to devise a mechanical design for the mechanics
          of the zoetrope, visible only in wireframe view. Following construction, I created an animation strip which I 
          then mapped onto the tube's inner circumference via UV mapping. Finally, I animated the zoetrope using keyframes, 
          a dynamic camera, and lighting.</p>          
          <img src={UVStrip} alt="UV Animation Strip" className="size-150 rounded-2xl" />
        </div>
        <div className="flex gap-8 my-4">
          <img src={Isometric} alt="Isometric View of Zoetrope" className="w-1/2 rounded-2xl" />
          <img src={Cogwheels} alt="Cogwheels Focused Isometric View Shot of Zoetrope" className="w-1/2 rounded-2xl" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Zoetrope
