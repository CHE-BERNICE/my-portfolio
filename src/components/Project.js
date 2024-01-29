import React from 'react';
import ReactPlayer from 'react-player';

const Project = ({videoFile}) => {
  return (
    <div className='grid justify-items-center w-full'>
      <ReactPlayer className='' url={videoFile} controls={true} fluid={false} width='auto' />
    </div>
  )
}

export default Project