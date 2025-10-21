import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 md:px-6 lg:px-8 overflow-visible">
      {children}
    </div>
  )
}

export default Container
