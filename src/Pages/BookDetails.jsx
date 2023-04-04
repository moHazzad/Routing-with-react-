import React, { useState } from 'react'
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import Spinner from '../Components/Spinner'

function BookDetails() {
  const [fold , setFold] = useState(true)
  const bookData = useLoaderData()
  const navigation = useNavigation()


  if(navigation.state === 'loading'){
    return <Spinner />
  }
  const {authors,image, publisher,title,price,desc,year,rating } = bookData
  return (
    <div className='w-[70%] mx-auto py-10'>
     <div className='flex gap-5 border rounded '>
      <div className='w-[50%]'>
        <img src={image}  alt=""  className='w-full '/>
      </div>
      <div className='w-[50%] py-10'>
        <span className='bg-yellow-400 px-3 text-xs font-semibold rounded-lg'>BRAND NEW</span>
        <h2  className='text-4xl font-bold mb-3'>{title}</h2>
        <p>Author: {authors}</p>
        <p>Publisher: {publisher}</p>
        <p>Year: {year}</p>
        <p>Rating: {rating}</p>
        {
          fold?(<div className=''><p className='py-3'>{desc.substring(0, 100)}....  </p> <span className='cursor-pointer text-blue-400 hover:font-semibold ' onClick={()=>setFold(!fold)}>read more</span></div>)
          :(<><p className='py-3'>{desc}</p><span className= 'cursor-pointer text-blue-400 hover:font-semibold' onClick={()=>{setFold(!fold)}}>read less</span></>)
        }
        
        <div className='flex gap-3 items-center mt-3  '>
          <button  className='hover:bg-blue-600 transition duration-200 flex gap-2 bg-blue-400 py-3 px-5 rounded-md font-semibold text-white'>Buy Now</button>
          <p className='font-semibold'>{price}</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default BookDetails