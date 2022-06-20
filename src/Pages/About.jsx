import React from 'react'

function About() {
  return (
    <div className='card p-5 shadow-xl'>
      <h1 className="text-6xl mb-2">
        Github Founder
      </h1>
      <p className="mb-4 text-2xl font-light">
        A react app to search Github profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className='text-white'>1.0.0</span>
      </p>
    </div>
  )
}

export default About