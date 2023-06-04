import React, { useState } from 'react'
import Head from 'next/head'
import PokemonList from '@/components/PokemonList'
import TitleComponent from '@/components/TitleComponent'

export default function Pokemons({ pokemonsList }) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  return (
    <div>
      {pokemonsList.length === 0 && (
        <p className="text-white text-2xl">Loading...</p>
      )}
      {pokemonsList.length > 0 && (
        <>
          <Head>
            <title>Pokedex App - Code Lancashire - Pawel Czarczynski</title>
          </Head>
          <TitleComponent label="Pokemon List" />
          <PokemonList
            pokemons={pokemonsList}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </>
      )}
    </div>
  )
}

export async function getStaticProps(context) {
  const response = await fetch('https://pokedexapi-93d8.onrender.com/pokemon/')
  const data = await response.json()

  return {
    props: {
      pokemonsList: data,
    },
  }
}

