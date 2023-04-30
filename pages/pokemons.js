import React from 'react'
import Head from "next/head"
import { useState } from 'react'
//import pokemons from "@/assets/sampledataset.json"
import PokemonList from '@/components/PokemonList'
import TitleComponent from '@/components/TitleComponent'
import Paging from '@/components/Paging'


export default function Pokemons({pokemonsList}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  return (
    <>
        <Head>
            <title>Pokemon</title>
        </Head>

        <TitleComponent label="Pokemon List"/>
        <PokemonList pokemons={pokemonsList} currentPage={currentPage} itemsPerPage={itemsPerPage}  />
       
    </>
  )
}

export async function getServerSideProps(context) {
    // const response = await fetch(url)
    // const data = await response.json()
    // console.log("pokemon", pokemons)
    const response = await fetch("http://127.0.0.1:8000/pokemon")
    const data = await response.json()
  
  
   // console.log("pokemons", data)
  
    return {
      props: {
        pokemonsList: data,
      },
    }
  }