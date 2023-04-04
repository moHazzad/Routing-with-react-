import React from 'react'
import { Link } from 'react-router-dom'

function Book({book}) {
    const {image, isbn13,price, subtitle,title,url} = book
    
  return (

    <Link to={`../book/${book.isbn13}`}>
    <div className='relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
        <img src={image} alt="" />
        <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
           <p>{book.title}</p>
           <br />
           <p>{book.subtitle.substring(0, 45)}...</p>
           <br />
           <p className='mt-auto'>Price: {book.price}</p>
         </div>
    </div>
    </Link>

  )
}

export default Book