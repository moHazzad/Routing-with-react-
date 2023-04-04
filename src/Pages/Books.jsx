import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import Book from './Book'
import Spinner from '../Components/Spinner'

function Books() {
  const navigation = useNavigation()
  const {books} = useLoaderData()
    // console.log(books);

  if(navigation.state === 'loading'){
    return <Spinner />
  }
    
  return (
    <div className='grid grid-cols-4 gap-5 w-[90%] mx-auto my-8'>
        {
            books.map(book =>(<Book key={book.isbn13} book={book} />))
        }
    </div>
  )
}

export default Books