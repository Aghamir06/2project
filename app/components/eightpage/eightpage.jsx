import Image from 'next/image'
import React from 'react'

const Eightpage = () => {
  return (
    <div className='mt-20'>
        <div className='flex flex-col gap-8 justify-center items-center'>
            <h1 className='font-semibold text-5xl'>Loved by the world's best teams</h1>
            <button className='px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition'>See all customer stories →</button>
        </div>
        <div className='flex'>
            <div className='flex flex-col gap-6 items-center w-200 h-50 mt-20'>
                <h1 className='text-2xl font-semibold'>vmware</h1>
                <p className='text-[#05003899]'>
                    “When the pandemic hit, those of us <br /> who thrive on in-person <br /> collaboration were worried that our <br /> creativity and productivity would <br /> suffer. Miro was the perfect tool to <br /> help us with collaboration,<br />whiteboarding, and retrospectives <br /> while remote.”
                </p>               
                 <p>Roxanne Mustafa <br />Design Team Lead at VMware</p>
            </div>
             <div className='flex flex-col gap-6 items-center w-100 h-50 mt-20'>
                <h1 className='text-2xl font-semibold'>vmware</h1>
                <p className='text-[#05003899]'>
                    “When the pandemic hit, those of us <br /> who thrive on in-person <br /> collaboration were worried that our <br /> creativity and productivity would <br /> suffer. Miro was the perfect tool to <br /> help us with collaboration,<br />whiteboarding, and retrospectives <br /> while remote.”
                </p>               
                 <p>Roxanne Mustafa <br />Design Team Lead at VMware</p>
            </div>
             <div className='flex flex-col gap-6 items-center w-200 h-50 mt-20'>
                <h1 className='text-2xl font-semibold'>vmware</h1>
                <p className='text-[#05003899]'>
                    “When the pandemic hit, those of us <br /> who thrive on in-person <br /> collaboration were worried that our <br /> creativity and productivity would <br /> suffer. Miro was the perfect tool to <br /> help us with collaboration,<br />whiteboarding, and retrospectives <br /> while remote.”
                </p>               
                 <p>Roxanne Mustafa <br />Design Team Lead at VMware</p>
            </div>
        </div>
    </div>
  )
}

export default Eightpage