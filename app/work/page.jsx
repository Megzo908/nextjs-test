//Images
import Fiber from '../Images/Fiber.png'
import Space from '../Images/Spacetourist.png'
import Weather from '../Images/weatherjournal.png'
import Udacity from '../Images/Udacitylandingpage.png'
import Image from 'next/image'

//Names
const All = [
  //fiber
  {
    image: Fiber,
    name: 'Fiber landing page',
    Live: 'https://megzo908.github.io/Fiber/',
    Code: 'https://github.com/Megzo908/Fiber.git',
  },
  //space
  {
    image: Space,
    name: 'Space Tourist',
    Live: 'https://megzo908.github.io/space-tourist2/',
    Code: 'https://github.com/Megzo908/space-tourist2.git',
  },
  //weather
  {
    image: Weather,
    name: 'Weather Journal',
    Code: 'https://github.com/Megzo908/Udacity-Weather-Journal-App.git',
  },
  //udacity
  {
    image: Udacity,
    name: 'Udacity Landing Pgae',
    Live: 'https://megzo908.github.io/Udacity-landing-page/',
    Code: 'https://github.com/Megzo908/Udacity-landing-page.git',
  },
]
const Work = () => {
  const cards = All.map((card, index) => (
    <div
      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
      key={index}
    >
      <Image
        src={card.image}
        className='hover:opacity-50 group-hover:opacity-40 duration-500'
      />
      {/* Hover Effects */}
      <div className='opacity-0 group-hover:opacity-100 absolute duration-500'>
        <span className='text-2xl font-bold text-white tracking-wider'>
          {card.name}
        </span>
        <div className='pt-8 text-center'>
          <a href={card.Live}>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              Demo
            </button>
          </a>
          <a href={card.Code}>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  ))
  return (
    <div name='work' className='w-full md:h-screen text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#3be29f] '>
            Work
          </p>
          <p className='py-6 text-lg'>{'Check out some of my recent work'}</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
          {/* Grid Item */}
          {cards}
        </div>
      </div>
    </div>
  )
}

export default Work
