import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col gap-4 items-center justify-center mt-20 w-[50%] '>
            <p className='text-4xl font-bold mr-17'>Take ideas from <br /> better to best</p>
            <p className=''>Miro is your team's visual platform to connect, <br /> collaborate, and create — together.</p>
        
        <input className=' -mr-25 rounded-4xl mt-5 p-2 w-[60%] border border-gray-500'
        type="email"
        id="email"
        placeholder="Enter your work email"
         />

         <div>
          <button className='bg-blue-600 px-44 -mr-24 p-3 rounded-4xl text-white hover:bg-black hover:text-white cursor-pointer active:scale-95 transition'>Sign up free →</button>
         </div>
        <p className='mr-16 text-[#05003866]'>Collaborate with your team within minutes</p>

        <div className='w-100 h-17 bg-[#F5F5F7] -mr-8'>

       <div className='flex w-25 h-30 gap-1 mt-2 ml-3'>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-yellow-400 "
        fill="currentColor"
        viewBox="0 0 24 24"
        >
      <path
       d="M12 0.587l3.668 7.568 8.332 1.151-6.064 5.921 
       1.432 8.281-7.368-3.877-7.368 3.877 1.432-8.281
       -6.064-5.921 8.332-1.151z"
      />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 24 24"
        >
      <path
       d="M12 0.587l3.668 7.568 8.332 1.151-6.064 5.921 
       1.432 8.281-7.368-3.877-7.368 3.877 1.432-8.281
       -6.064-5.921 8.332-1.151z"
      />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 24 24"
        >
      <path
       d="M12 0.587l3.668 7.568 8.332 1.151-6.064 5.921 
       1.432 8.281-7.368-3.877-7.368 3.877 1.432-8.281
       -6.064-5.921 8.332-1.151z"
      />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 24 24"
        >
      <path
       d="M12 0.587l3.668 7.568 8.332 1.151-6.064 5.921 
       1.432 8.281-7.368-3.877-7.368 3.877 1.432-8.281
       -6.064-5.921 8.332-1.151z"
      />
      </svg>
     <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6 text-yellow-400"
  viewBox="0 0 24 24"
>
  <defs>
    <linearGradient id="half-gradient">
      <stop offset="50%" stopColor="currentColor" />   {/* sol yarı dolu */}
      <stop offset="50%" stopColor="transparent" />    {/* sağ yarı boş */}
    </linearGradient>
  </defs>
  <path
    fill="url(#half-gradient)"
    stroke="currentColor"
    strokeWidth="1"
    d="M12 0.587l3.668 7.568 8.332 1.151-6.064 5.921
       1.432 8.281-7.368-3.877-7.368 3.877
       1.432-8.281-6.064-5.921 8.332-1.151z"
  />
</svg>


       </div>

       <div className='-mt-24 ml-2'>
       <p>Based on 5149+ reviews:</p>
       </div>

       <div className='flex gap-6 ml-60 -mt-8'>
       <p className='font-bold'>GetApp</p>
       <p className='font-bold'>Capterra</p>
       </div>

  
        </div>
         
        </div>

        <div className='relative  "'>
          <Image className='absolute right-40 -top-48 transform -translate-y-1/2' src="/footerphoto.png" 
          width={600}
          height={600}
          />
        </div>

        <div className=' flex flex-col text-center mt-35 gap-6'>
          <p className='text-[#05003899]'>Trusted by 45M+ users</p>
         <div className=' flex items-center justify-between text-center mr-40 ml-40 p-4 font-bold '>
            <p>WALMART</p>
            <p>CISCO</p>
            <p>VOLVO</p>
            <p>DELOITTLE</p>
            <p>OKTA</p>
         </div>
        </div>
      
    </div>
  )
}

export default Footer