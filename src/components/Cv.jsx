import React from 'react'
import './cv.css'
import cvFile from './cv/CV.pdf';

const Cv = () => {
  return (
    <div>
      <div className="fixed-cv-button">
      <a href={cvFile} target="_blank" rel="noopener noreferrer" download>
            Download CV
      </a>
    </div>
    </div>
  )
}

export default Cv
