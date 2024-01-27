import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import resume from '../files/resume.pdf';

const Footer = () => {
  return (
    <div className='grid place-content-center bg-blue-50 px-4 b-0 py-7'>
        <div className='grid grid-cols-2 place-content-center gap-x-7 my-2 '>
            <p className='text-center justify-self-end'>Connect with me via  </p>
            <span className='grid grid-cols-2 content-center justify-self-start gap-x-3 px-0'>
                <a href="https://github.com/CHE-BERNICE" className="text-blue-700 justify-self-end">
                    <FaGithub className='h-5 w-5'/>
                </a>
                <a href="https://www.linkedin.com/in/bernice-che-368030242/" className='text-blue-700 justify-self-start'>
                    <FaLinkedin className='h-5 w-5'/>
                </a>
            </span>
        </div>
        
        <a href={resume} className=' border-2 border-green-600 place-self-center font-semibold text-green-600 inline-block p-2 mb-2'>My Resume</a>
        <div className='mb-2'>
            <div className='font-semibold text-center'>
                BERNICE<span className='text-blue-500'>DEV</span>
                <span> &copy; copyright 2024. All rights reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer;