import React from 'react'
import Marquee from 'react-fast-marquee'

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-2">
      <p className="text-base-100 bg-secondary ml-1 px-5 py-2">Latest</p>

      <Marquee className="flex gap-5" pauseOnHover={true} speed={100}>
        <p className="font-bold">
          this is marquee 1
        </p>
        <p className="font-bold">
         this is marque 2
        </p>
        <p className="font-bold">
         this is marque 3
        </p>
      </Marquee>
    </div>
  )
}

export default LatestNews
