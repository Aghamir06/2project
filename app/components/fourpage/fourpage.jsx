import Image from 'next/image'
import React from 'react'

const Fourpage = () => {
  return (
    <div>
        <div className='flex justify-center items-center mt-25'>
            <Image src="/fourmain.png"
            width={1000}
            height={600}
            />
            <div className='absolute'>
              <div className='relative -right-70'>
                   <div className='flex flex-col gap-4 items-center'>
                     <h1 className='font-bold'>The Ways <br /> We work</h1>
                    <p className='-mt-5'>How has our relationship with work changed?</p>
                    <button className='px-4 py-2 rounded-3xl bg-[#4262FF] text-white hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer active:scale-95 w-40'>View the report →</button>
                   </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Fourpage