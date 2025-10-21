import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Container from '../Components/Container/Container'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <Container>
        <header className="w-11/12 mx-auto">
          <Header></Header>
          <Navbar></Navbar>
        </header>
        <main className='w-11/12 mx-auto py-5'>
          <Outlet></Outlet>
        </main>
      </Container>
    </div>
  )
}

export default AuthLayout
