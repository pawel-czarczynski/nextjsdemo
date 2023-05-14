import React from 'react'

export default function About() {
  return (
    <div className='flex flex-col text-gray-300 text-2xl font-serif justify-center items-center'>
      <div className='flex w-screen bg-green-800 justify-between m-2 p-2'><h1>about me . . . </h1><h1>Back to main page</h1></div>
      <div className='flex flex-col m-2 w-full h-[300px] bg-gray-800 p-3 rounded-xl justify-start'>
        <div className='flex h-[200px'>

        </div>
      </div> 
      <div className='flex flex-col m-2 bg-gray-600 p-3 rounded-xl justify-start'>
        <ul>
          <li className='mb-3 list-none'>Links:</li>
          <li className='m-1 p-3 list-none bg-gray-800 rounded-xl'> <a href='https://nextjsdemo-pawel-czarczynski.vercel.app/'>This application</a></li>
          <li className='m-1 p-3 list-none bg-gray-800 rounded-xl'> <a href='https://github.com/pawel-czarczynski/nextjsdemo'> GitHub</a></li>          
          <li className='m-1 p-3 list-none bg-gray-800 rounded-xl'> <a href='https://github.com/pawel-czarczynski/FastApi_pokemon'> Back end API</a></li>
          <li className='m-1 p-3 list-none bg-gray-800 rounded-xl'> <a href='https://www.linkedin.com/in/pawelczarczynski/'> LinkedIn</a></li> 
        </ul>
      </div> 
    </div>
  )
}
