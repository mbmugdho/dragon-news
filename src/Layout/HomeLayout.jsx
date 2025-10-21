import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'
import LatestNews from '../Components/LatestNews'
import Navbar from '../Components/Navbar'
import LeftAside from '../Components/HomeLayout/leftAside'
import RightAside from '../Components/HomeLayout/RightAside'
import Container from '../Components/Container/Container'

const HomeLayout = () => {
  return (
    <Container>
      <div>
        <header className='sticky top-0 z-50 bg-base-100'>
          <Header ></Header>
          <section className="w-11/12 mx-auto my-3">
            <LatestNews></LatestNews>
          </section>
          <nav className="w-11/12 mx-auto my-3">
            <Navbar></Navbar>
          </nav>
        </header>
        <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
          <aside className="col-span-3 sticky top-[250px] h-fit">
            <LeftAside></LeftAside>
          </aside>
          <section className="main col-span-6">
            <Outlet></Outlet>
          </section>
          <aside className="col-span-3 sticky top-[250px] h-fit">
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    </Container>
  )
}

export default HomeLayout
