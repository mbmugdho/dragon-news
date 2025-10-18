import React from 'react'
import { FaEye } from 'react-icons/fa'
import { FaShareAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaStar } from 'react-icons/fa6'

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, total_view, rating,} =
    news

  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
  )

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 overflow-hidden">
      {/* Author Info */}
      <div className="flex items-center justify-between p-3 bg-base-200 mb-2">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <button >
            <FaRegBookmark size={24} />
          </button>
          <button >
            <FaShareAlt size={24}/>
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-3 mb-2">
        <h2 className="font-bold text-lg leading-snug hover:text-secondary transition">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure >
        <img className="w-full px-3 mb-2 rounded-2xl "
         src={thumbnail_url} alt="News Thumbnail"  />
      </figure>

      {/* Details */}
      <div className="px-3">
        <p className="text-sm text-gray-700">
          {details.slice(0, 200)}...{' '}
          <a className="link link-secondary text-sm">Read More</a>
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-2 border-t p-2 px-2 text-sm">
          <div className="flex items-center gap-2 text-warning">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating.number ? 'text-warning' : 'text-gray-300'}
              />
            ))}
            <span className="text-gray-600">{rating.number}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye /> {total_view}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
