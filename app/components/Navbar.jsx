'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar({ NavLinks }) {
  const pathname = usePathname()
  return (
    <div className='navbar bg-black fixed'>
      <div className='navbar-start '>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {NavLinks.map((link, index) => {
              const isActive = pathname.startsWith(`/${link.toLowerCase()}`)

              return (
                <li key={index}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className={`hover:bg-[#3be29f] hover:text-black ${
                      isActive ? 'active' : ''
                    }`}
                  >
                    {link}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <Link
          href='/'
          className={`btn btn-ghost normal-case text-xl hover:bg-[#3be29f] hover:text-black duration-500 ${
            pathname === '/' ? 'bg-[#3be29f] text-black' : ''
          }`}
        >
          Omar Magdy
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {NavLinks.map((link, index) => {
            const isActive = pathname.startsWith(`/${link.toLowerCase()}`)

            return (
              <li key={index}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className={`hover:bg-[#3be29f] hover:text-black duration-500 ${
                    isActive ? 'active' : ''
                  }`}
                >
                  {link}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='navbar-end'>
        <Link
          href='/contact'
          className={`btn hover:bg-[#3be29f] hover:text-black duration-500 ${
            pathname === '/contact' ? 'bg-[#3be29f] text-black' : ''
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
export default Navbar
