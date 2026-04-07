import Card from '../components/Card'
function Work() {
  return(
    <>
      <div className="flex flex-col w-full justify-center items-center-safe p-8 gap-16">
        <h1 className='title md:text-6xl text-4xl text-left w-full'>MY WORK</h1>
        <p className='text-left w-full'>Browse through my projects and get to know my working process!</p>
        <div className='flex flex-col w-full gap-8'>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="FairGig"
                route="/projects/fairgig"
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>FairGig</h2>
              <p>Tracking and comparing income based on anonymous data</p>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="AI-Chatbot"
                route="/projects/ai-chatbot"
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>AI-Chatbot</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos qui? Iusto repudiandae minus, 
                ipsa placeat quasi aspernatur inventore mollitia. Reprehenderit quaerat accusamus sapiente vero aperiam 
                repellendus vitae soluta eius!</p>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="BLCK"
                route="/projects/blck"
                enableParticles={false}
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>BLCK</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos qui? Iusto repudiandae minus, 
                ipsa placeat quasi aspernatur inventore mollitia. Reprehenderit quaerat accusamus sapiente vero aperiam 
                repellendus vitae soluta eius!</p>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="Portfolio"
                route="/projects/portfolio"
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>Personal Website</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos qui? Iusto repudiandae minus, 
                ipsa placeat quasi aspernatur inventore mollitia. Reprehenderit quaerat accusamus sapiente vero aperiam 
                repellendus vitae soluta eius!</p>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="3D Zoetrope"
                route="/projects/zoetrope"
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>Animated 3D Zoetrope</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos qui? Iusto repudiandae minus, 
                ipsa placeat quasi aspernatur inventore mollitia. Reprehenderit quaerat accusamus sapiente vero aperiam 
                repellendus vitae soluta eius!</p>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="Onirique"
                route="/projects/onirique-hotels"
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>Onirique Hotels</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque cum recusandae, excepturi 
                ipsa laudantium rem expedita beatae distinctio natus reiciendis fuga animi nam optio veniam vel molestias, 
                eos rerum!</p>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='w-1/2'>
              <Card
                title="Fictive Passport"
                route="/projects/fictive-passport"
              />
            </div>
            <div className='flex flex-col w-1/2 text-left gap-4'>
              <h2 className='title'>Fictive Passport of 'Oceania Sea'</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos qui? Iusto repudiandae minus, 
                ipsa placeat quasi aspernatur inventore mollitia. Reprehenderit quaerat accusamus sapiente vero aperiam 
                repellendus vitae soluta eius!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work