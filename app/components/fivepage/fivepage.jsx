import Image from 'next/image'
import React from 'react'

const Fivepage = () => {
  return (
    <div className='mt-24'>
        <div>
            <h1 className='font-bold text-5xl text-left ml-50 p-4'>Built for the way you work</h1>
            <div className='flex flex-wrap justify-center gap-3 mt-4'>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Brainstorming</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Diagramming</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Meetings & Workshops</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Scrum Events</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Mapping</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Research & Design</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 '>Strategic Planning</button>
             


            </div>
        </div>
       
       <div className='flex'>
         <div className='flex flex-col gap-6 w-[50%] items-center text-center justify-center mt-15'>
          <h1>Brainstorming</h1>
          <p>Unleash creative ideas and build on <br /> them with the help of sticky notes,<br /> images, mind maps, videos, drawing <br /> capabilities — the list goes on.</p>
          <p><span className='text-[#4262FF]'>Learn more →</span></p>
        </div>
         <div className='mt-10 -ml-20'>
          <Image src="/fivephoto.png"
          width={600}
          height={600}
          />
        </div>
       </div>
        
        
    </div>
  )
}

export default Fivepage