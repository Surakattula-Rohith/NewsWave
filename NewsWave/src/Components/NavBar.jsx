import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      {/* <Link to="/">
        <img className="w-[50px]" src={Logo} />
      </Link> */}
      <Link to="/" className="text-3xl font-bold text-blue-500">
        Home
      </Link>
      <Link to="/publishers" className="text-3xl font-bold text-blue-500">
      publishers
      </Link>
      <Link to="/personalinfo" className="text-3xl font-bold text-blue-500">
      personalinfo
      </Link>
    </div>
  )
}

export default NavBar