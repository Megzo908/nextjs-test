import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div name='home' className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#3be29f]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Omar Magdy
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a ReactJS Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a ReactJS developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive React web applications.
        </p>
        <div>
          <Link href='/work'>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3be29f] hover:border-[#3be29f] hover:text-black duration-500'>
              View Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
