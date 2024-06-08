import React from 'react'
import RequestCard from './RequestCard'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <div className='absolute h-[340px]'>
        <img className='h-[340px] w-screen' src="/assets/images/WhatsApp Image 2024-06-06 at 12.35.11_bba1fca4.jpg" alt="" />
      </div>
      <div className="absolute h-[340px] justify-center items-start pl-[7vw] flex flex-col text-white">
        <h1 className='text-6xl'>Save A Marriage Every Month</h1>
        <h2 className='text-xl pt-[20px]'>Join 41,100 monthly donors with Social Impact Plan and start saving needy father every month</h2>
        <button className='bg-white px-[2vw] py-[2vh] font-bold text-[#5487A0] mt-[25px]'>Start giving Monthly</button>
      </div>
      <div className='absolute top-[340px] flex flex-wrap'>
      <RequestCard/>
      <RequestCard/>
      <RequestCard/>
      <RequestCard/>
      <RequestCard/>
      <RequestCard/>
      </div>

    </div>
  )
}

export default Home
