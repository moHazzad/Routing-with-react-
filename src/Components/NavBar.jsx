import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'

function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <div className='w-[90%] mx-auto bg-slate-100 py-5 px-4 flex justify-between '>
        <div className='font-bold text-lg'>
            <Link to={'/'}>Next Page</Link>
        </div>
        <div className=' '>
          <div className='relative lg:hidden'>
            {
              open ?<XMarkIcon onClick={()=>setOpen(!open)} className='w-[25px] cursor-pointer' />:
              <Bars3Icon onClick={()=>setOpen(!open)} className='w-[25px] cursor-pointer' />
            }         
          </div>
           <div>
                <ul className='hidden lg:block  font-semibold cursor-pointer space-x-8  '>

                  <NavLink to={"/"} className={({isActive})=>(isActive?'text-blue-400':'')}> Home</NavLink>
                  <NavLink to={"/Books"} className={({isActive})=>(isActive?'text-blue-400':'')} >Books</NavLink>
                  <NavLink to={"/About"} className={({isActive})=>(isActive?'text-blue-400':'')}>About Us</NavLink>
                </ul>
                </div>

           </div>
          
          
        
    </div>
  )
}

export default NavBar