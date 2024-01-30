import React, {useState} from 'react';
import './Header.css';
import resume from '../../files/resume.pdf';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaRegTimesCircle } from 'react-icons/fa';

const Header = () => {
  const [open, setOpen] = useState(false);
  const Toggle = () => {
    setOpen(!open);
  }
  return (
    <div className='grid md:grid-cols-3 lg:gap-x-8 content-center bg-blue-50 md:h-28 mx-0 mt-0 px-2 lg:px-6'>
        <div className='grid grid-cols-2 md:grid-cols-none font-semibold text-center md:justify-self-center my-2 md:my-0 p-2'>
          <Link to='/' className='font-semibold text-center justify-self-start md:justify-self-center my-2 md:my-0 p-2'>BERNICE<span className='text-blue-500'>DEV</span></Link>
          <button className='md:hidden justify-self-end' onClick={Toggle}>{open ? <FaRegTimesCircle /> : <FaBars /> }</button>
        </div>
        {!open ? <><div className='hidden md:grid md:grid-cols-4 '>
            <NavLink to='/' className='text-center font-semibold p-3'>Home</NavLink>
            <NavLink to='/about' className='text-center font-semibold p-3'>About</NavLink>
            <NavLink to='/projects' className='text-center font-semibold p-3'>Projects</NavLink>
            <NavLink to='/contact' className='text-center font-semibold p-3'>Contact</NavLink>
        </div>
        <a href={resume} className='hidden justify-self-center md:justify-self-end border-2 border-green-600 font-semibold text-green-600 md:inline-block my-2 md:my-0 p-2'>My Resume</a></>
        : <><div className='grid md:grid-cols-4 '>
        <NavLink to='/' className='text-center font-semibold p-3'>Home</NavLink>
        <NavLink to='/about' className='text-center font-semibold p-3'>About</NavLink>
        <NavLink to='/projects' className='text-center font-semibold p-3'>Projects</NavLink>
        <NavLink to='/contact' className='text-center font-semibold p-3'>Contact</NavLink>
        </div>
        <a href={resume} className='justify-self-center md:justify-self-end border-2 border-green-600 font-semibold text-green-600 md:inline-block my-2 md:my-0 p-2'>My Resume</a></>
        }
    </div>
  )
}

export default Header;