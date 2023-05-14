import React from 'react'


export default function TitleComponent({label}) {
  return (
    <div className='flex flex-col'>
    <h1 className="border border-black rounded-xl from-yellow-400 to-yellow-600 bg-gradient-to-b flex flex-col text-5xl items-center space-x-5 p-5 m-5 lg:mx-72 md:mx-32">{label}</h1>
   
    </div>
  )
}
