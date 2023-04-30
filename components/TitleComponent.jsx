import React from 'react'

export default function TitleComponent({label}) {
  return (
    <h1 className="border border-black rounded bg-yellow-400 flex flex-col text-5xl items-center space-x-5 p-5 m-5">{label}</h1>
  )
}
