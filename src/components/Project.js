import React from 'react';
import ReactPlayer from 'react-player';

const Project = ({videoFile}) => {
  return (
    <div className='grid justify-items-center'>
      <ReactPlayer className='' url={videoFile} width='400px' height='340px' controls={true} />
    </div>
  )
}

export default Project