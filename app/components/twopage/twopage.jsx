import Image from 'next/image'
import React from 'react'

const Twopage = () => {
  return (
    <div className='flex mt-10 justify-center items-center'>
        <div className='flex flex-col gap-4 items-center justify-center w-[50%] -ml-50'>
            <h1 className='font-bold -ml-22 text-3xl'>Work together,<br /> wherever you work</h1>
            <p className=''>In the office, remote, or a mix of the two, with Miro,<br /> your team can connect, collaborate, and co-create in <br />one space no matter where you are.</p>
            <p className='-ml-68'> <span className='text-[#4262FF]'>Learn more →</span></p>
        </div>
        <div className=''>
            <Image src='/twopagephoto.png'
            width={400}
            height={400}
            />
        </div>
    </div>
  )
}

export default Twopage