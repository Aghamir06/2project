import Image from 'next/image'
import React from 'react'

const Threepage = () => {
  return (
    <div className='flex mt-10'>
        <div className='flex justify-center w-[50%] ml-20'>
            <Image src="/threepagephoto.png"
            width={400}
            height={400}
            />
        </div>
        <div className='flex flex-col gap-6 mt-15'>
            <h1 className='font-bold text-3xl'>Connect <br /> your tools, <br /> close your tabs</h1>
            <p>Whether you want to edit your Google Docs, resolve <br /> Jira issues, or collaborate over Zoom, Miro has 100+ <br /> integrations with tools you already use and love.</p>
            <p> <span className='text-[#4262FF]'>Learn more →</span> </p>
        </div>
    </div>
  )
}

export default Threepage