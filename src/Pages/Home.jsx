import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Lottie from "lottie-react";
import reader from "../assets/Reader.json";
import { Link, useNavigation } from 'react-router-dom';
import Spinner from '../Components/Spinner';


function Home() {
  const navigation = useNavigation()

  if(navigation.state === 'loading'){
    return  <Spinner />
  }
  return (
    <div className=' w-[90%] mx-auto flex h-full py-20  justify-between  '>
       <div className='w-[50%] mt-10 pr -5 '>
        <span className='bg-yellow-400 px-3 text-xs font-semibold rounded-lg'>ON SALE!</span>
        <h1 className='text-4xl font-bold my-1'>A reader lives a</h1>
        <h1 className='text-4xl font-bold'>thousand lives <span className='text-blue-400'>before he dies</span></h1>
        <p className='my-7 text-base'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>

        <Link to={'books'}>
        <div className='flex gap-6'>
        <button className='hover:bg-blue-600 transition duration-200 flex gap-2 bg-blue-400 py-3 px-5 rounded-md font-semibold text-white'>Visit Store <ShoppingCartIcon  className="h-6 w-6 "  /> </button>
        <button className='text-blue-400 hover:font-semibold'>Learn More</button>
        </div>
        </Link>
       </div>
       <div className='w-[40%] '>
        <div className=''>
            <Lottie animationData={reader} loop={true} />
        </div>
       </div>
    </div>
  )
}

export default Home