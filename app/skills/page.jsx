import HTML from '../Images/html.png'
import CSS from '../Images/css.png'
import JavaScript from '../Images/javascript.png'
import ReactImg from '../Images/react.png'
import Node from '../Images/node.png'
import GitHub from '../Images/github.png'
import Tailwind from '../Images/tailwind.png'
import Sass from '../Images/Sass.png'
import Image from 'next/image'

const Skills = () => {
  const Icons = [HTML, CSS, JavaScript, ReactImg, Node, GitHub, Tailwind, Sass]
  const Names = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'GitHub',
    'Tailwind',
    'Sass',
  ]
  const cards = Icons.map((icon, index) => (
    <div
      className='shadow-lg shadow-[#24202c] hover:scale-110 duration-500 '
      key={index}
    >
      <Image className='w-20 mx-auto' src={icon} alt='icon' />
      <p className='my-4'>{Names[index]}</p>
    </div>
  ))

  return (
    <div name='skills' className='w-full h-screen text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#3be29f] '>
            Skills
          </p>
          <p className='py-4'>{`These are the technologies I've worked with`}</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {cards}
        </div>
      </div>
    </div>
  )
}

export default Skills
