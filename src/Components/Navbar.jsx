import React from 'react'
import { Link, NavLink } from 'react-router'
import userImg from '../assets/user.png'
import { use } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

const Navbar = () => {
  const { user, logOut } = use(AuthContext)
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert('Logout successful')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="">{user && user.email}</div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-2">
        <img src={userImg} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
