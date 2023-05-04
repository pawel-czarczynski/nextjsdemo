import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import {useRouter} from "next/router"

export default function PokemonPage({details}) {
  const router = useRouter()
 // console.log('details', details)
  return (
    <div className="flex justify-center flex-col items-center ">
      <div className='w-[400px] h-[600px] m-10 p-3 border bg-slate-800 border-gray-400 rounded-xl text-gray-300'>
        <h1 className="text-4xl font-semibold text-center bg-slate-700 rounded-lg p-2">{details.name }  </h1>

        <div className="relative">
          <Image src={details.imageURL} width={384} height={384} />
        </div>
      <div className='grid grid-cols-2 mt-5'>
        <div className="m-2">
            <p className='p-1 px-3 m-1 bg-gray-700'><span className=' text-left'>HP: </span><span className='float-right'>{details.stats[0].hp}</span></p>
            <p className='p-1 px-3 m-1 bg-gray-700'><span className=' text-left'>Height:  </span><span className='float-right'>{details.stats[0].height_m}</span></p>       
            <p className='p-1 px-3 m-1 bg-gray-700'><span className=' text-left'>Weight:  </span><span className='float-right'>{details.stats[0].weight_kg}</span></p>
          </div>
          <div className="m-2">
            <p className='p-1 px-3 m-1 bg-gray-700'><span className=' text-left'>Defense:  </span><span className='float-right'>{details.stats[0].defense}</span></p>
            <p className='p-1 px-3 m-1 bg-gray-700'><span className=' text-left'>Attack:  </span><span className='float-right'>{details.stats[0].attack}</span></p>
            <p className='p-1 px-3 m-1 bg-gray-700'><span className=' text-left'>Speed:  </span><span className='float-right'>{details.stats[0].speed}</span></p>          
          </div>
      </div>
      </div>
      <button className='text-xl w-24 text-amber-400 bg-slate-600 border rounded-full border-blue-700'><Link href='/pokemons'>Back</Link></button>
    </div>
  )
}

export async function getServerSideProps(context){
 // console.log("context", context.params)
  const pokemonName =  context.params.pokemonname
  const response = await fetch(`https://pokedexapi-93d8.onrender.com/pokemon/${pokemonName}`)
  let data = await response.json()

  const externalUrl = ` https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}` 

  const externalDataResponse = await fetch(externalUrl)
  const externalData = await externalDataResponse.json()

  const imageURL = externalData.sprites.other['official-artwork'].front_default


  //console.log("before", externalData.sprites.other['official-artwork'].front_default)

  data = {...data, imageURL}
 // console.log("data of single pokemon", data)

  return {
    props: {
      details: data
    }
  }
}