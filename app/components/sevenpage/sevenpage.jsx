import React from 'react'

const Sevenpage = () => {
  return (
<div className='bg-yellow-400 mt-20' >
 <div className='flex flex-col justify-center items-center text-start gap-2 py-16'>
  <h1 className='font-semibold text-4xl'>Why companies large <br /> and small trust Miro</h1>  
   <p>Contact Sales to request a demo</p>
 </div>      
 
   <div className="min-h-screen flex items-center justify-center -mt-50">
      <div className="grid grid-cols-3 gap-6 text-center">
        <div className="flex flex-col gap-6  p-6 rounded-2xl shadow-md hover:bg-gray-200 transition">
          <h1 className='text-5xl font-semibold'>İSO</h1>
          <p>ISO-27001 enterprise-grade security compliant</p>
        </div>
        <div className=" flex flex-col gap-6 p-6 rounded-2xl shadow-md hover:bg-gray-200 transition">
          <h1 className='text-5xl font-semibold'>#1</h1>
          <p>Visual Collaboration Platform on G2</p>
        </div>
        <div className=" flex flex-col gap-6 p-6 rounded-2xl shadow-md hover:bg-gray-200 transition">
         <h1 className='text-5xl font-semibold'>99%</h1>
         <p>of the Fortune 100 are customers</p>
        </div>
        <div className=" flex flex-col gap-6 p-6 rounded-2xl shadow-md hover:bg-gray-200 transition mt-20">
        <h1 className='text-5xl font-semibold'>1000+</h1>
        <p>community- and expert-built templates</p>
        </div>
        <div className="flex flex-col gap-6  p-6 rounded-2xl shadow-md hover:bg-gray-200 transition mt-20">
         <h1 className='text-5xl font-semibold'>45M+</h1>
         <p>users around the world</p>
        </div>
        <div className=" flex flex-col gap-6 p-6 rounded-2xl shadow-md hover:bg-gray-200 transition mt-20">
        <h1 className='text-5xl font-semibold'>100+</h1>
        <p>integrations with technology partners</p>
        </div>
      </div>
    </div>

</div>
  )
}

export default Sevenpage