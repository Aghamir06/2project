import React from 'react'

const Onepage = () => {
  return (
    <div>
      <div className='items-center text-center mt-30 p-2'>
        <h1 className='text-4xl font-bold'>
         Collaborate without <br />constraints
        </h1>
      </div>
             <div className='flex'>
              <div className='text-left ml-40 mt-10 p-4'>
        <h1 className='font-bold text-2xl'>Free forever</h1>
        <p className='mt-5 text-[#05003899]'>Our free plan gives you unlimited team <br /> members, 3 boards, and 300+ expert- <br />made templates. Signing up with your <br /> work email lets you bring in your team <br /> faster. See our <br />         <span className='text-[#4262FF]'>pricing plans</span> for more features.</p>
             </div>
      <div className=' mt-15 ml-34'>
        <h1 className='font-bold text-2xl'>Easy integrations</h1>
        <p className='mt-5 text-[#05003899]'>Miro has 100+ powerful integrations <br /> with tools you already use like G <br /> Suite, Slack, and Jira, so your <br /> workflow is seamless. View the full <br /> list in our <span className='text-[#4262FF]'>Marketplace.</span> </p>
      </div>
      <div className='ml-50 mt-15'>
        <h1 className='text-2xl font-bold'>Security first</h1>
        <p className='text-[#05003899] mt-5'>We treat your data like you would — <br /> with the utmost care. We follow <br /> industry-leading security standards <br /> and give you tools to protect <br /> intellectual property. Learn more <br /> at our <span className='text-[#4262FF]'>Trust Center .</span></p>
      </div>
      
             </div>

             <div className='text-center mt-15'>
             <button className='px-4 py-2 rounded-3xl bg-[#4262FF] text-white hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer active:scale-95'>Sign up free →</button>
            </div>
      
    </div>
  )
}

export default Onepage