import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className='space-y-5'>
      <h2 className="font-bold">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start
           join-item"> <FaFacebook/>Facebook</button>
          <button className="btn bg-base-100 justify-start
           join-item"> <FaTwitter/> Twitter</button>
          <button className="btn bg-base-100 justify-start
           join-item"><FaInstagram/> Instagram</button>
        </div>
      </div>
    </div>
  )
}

export default FindUs
;<h2 className="font-bold">Find Us on</h2>
