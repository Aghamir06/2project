import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className=' flex justify-between'>
         <div className='flex'>
        <div className=' mt-5 ml-5'>
         <h1 className='flex text-3xl font-semibold pl-3 '>m i r o </h1>
        </div>
        <div className='mt-7 ml-6 flex gap-6'>
             <a href="">Product</a>
            <a href="">Solutions</a>
            <a href="">Resources</a>
            <a href="">Enterprise</a>
            <a href="">Pricing</a>
        </div>
       </div>
       <div className='flex gap-4 mr-10 mt-7'>
        <p>EN</p>
        <a href="">Contact Sales</a>
        <a href="">Login</a>
       <div className=''>
            <button className='bg-blue-700 px-4 py-3 -m-4 ml-5 rounded-full hover:font-bold   hover:bg-black  text-white  cursor-pointer active:scale-95 '>Sign up free →</button>
       </div>
        
       </div>
      </div>
    </div>
  )
}

export default Navbar