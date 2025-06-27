import React from 'react'

function Home() {
  return (
    <div className='w-full bg-[url(https://images.unsplash.com/photo-1488462104523-514bea5f99b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyb25lfGVufDB8fDB8fHww)] h-screen bg-no-repeat opacity-80 bg-size-[100%]'>
      <div className='absolute top-[30%] left-[4%]'>
        <h1 className='text-5xl font-bold leading-14'>View The World <br />With DRONES</h1>
        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Nobis, doloribus. Animi illo itaque veritatis accusamus maxime.</p>
        <button className='rounded border-black border-[1px] px-5 py-1 cursor-pointer my-2'>Buy Now</button>
      </div>
    </div>
  )
}

export default Home
