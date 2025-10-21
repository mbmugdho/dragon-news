import React from 'react'
import { use } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../AuthProvider/AuthProvider'

const Register = () => {
  const { createUser, setUser } = use(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const country = form.country.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, country, email, password)
    createUser(email, password)
    .then((result) => {
      const user = result.user
      setUser(user)
      console.log(user)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        alert(errorCode,errorMessage)
      })
    })
  }

  return (
    <div className="flex justify-center items-center py-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter Your Name "
              required
            />
            <label className="label">Your Country</label>
            <input
              name="country"
              type="text"
              className="input"
              placeholder="Your Country"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Enter your Email Address"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Enter your Password"
              required
            />

            <div className="flex items-center gap-1">
              <input type="checkbox" className="checkbox" />

              <p>
                <span className="text-accent">Accept</span> Term & Conditions
              </p>
            </div>

            <button
              type="submit"
              className="btn btn-neutral mt-4 hover:bg-secondary border-none"
            >
              Register
            </button>

            <p className="font-semibold text-center pt-5">
              Already Have An Account ? {''}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Register
