import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: true,
  },
  {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='xl:h-32 lg:h-20 md:h-28 h-24 z-40 pr-4 md:pr-7 bg-theme-300 text-white rounded-t-lg sticky top-0 font-semibold shadow-md shadow-theme-200'>
      {/* <Container> */}
        <nav className='flex'>
         <div className='flex xl:h-32 lg:h-20 md:h-28 h-24 md:w-2/5 lg:w-3/6 text-3xl md:text-3xl xl:text-7xl text-center justify-center items-center w-3/5'>
            <h className="gradientText text-xl md:text-2xl xl:text-5xl"
            ><Link to='/'> NEXUS BLOG</Link></h>
          </div>
          {/* </div> */}
          <ul className= 'lg:pl-10 pr-1 xl:pl-52 md:w-2/5 w-4/5 ml-auto flex justify-end items-center'>
            {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className=' lg:w-28 md:text-lg md:w-28 my-auto mr-1 md:mr-4 text-sm px-2 py-2 duration-200 hover:bg-theme-400 md:bg-theme-400 md:hover:bg-theme-200 hover:text-white hover:text-base md:hover:text-xl rounded-2xl focus:outline outline-sky'>
                  {item.name}
                </button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      {/* </Container> */}
    </header>
  )
}

export default Header
