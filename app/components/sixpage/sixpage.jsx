import Image from 'next/image'
import React from 'react'

const Sixpage = () => {
  return (
    <div>
        <div>
            <h1 className='font-bold text-5xl text-left ml-50 p-4 mt-40'>Built for all kinds of teams</h1>
            <div className='flex flex-wrap justify-center gap-3 mt-4'>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>UX & Design</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Marketing</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Product Management</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Engineering</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Consultants</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200'>Agile Coaches</button>
             <button className='px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 '>Sales</button>
             


            </div>
        </div>

        
       
       

  
        <div className='flex justify-center gap-15 mt-5'>

         <div>
        <div className="flex justify-center mt-18">
       <div className="flex flex-col items-start text-left gap-3">
       <p className='text-[#05003899]'>Build low-fi wireframes</p>
       <p className='text-[#05003899]'>Involve stakeholders in the design process</p>
       <p className='text-[#05003899]'>Run engaging design workshops</p>
      <p className="text-blue-600 font-medium cursor-pointer hover:underline">
        Learn more → </p>
         </div>
       </div>
       <div className=' flex flex-col items-center justufy-center mt-20 -ml-24 '>
        <p className='text-[#05003899]'>Integrate your favorite tools</p>
        <div className='flex gap-8 mt-5'>
          <Image src="/six1logo.png" width={25} height={25} className=''/>
           <Image src="/six2logo.png" width={25} height={25} className=''/>
            <Image src="/six3logo.png" width={25} height={25} className=''/>
             
        </div>
       </div>
        </div>
         
       <div>
        <Image src="/sixpagemain.png" width={600} height={600} />
       </div>

        </div>
  
    </div>
  )
}

export default Sixpage