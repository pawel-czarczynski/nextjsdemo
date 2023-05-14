import { useState } from "react"
import React from "react"
import Link from "next/link"
import Paging from "./Paging"


const colorMap = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  normal: "bg-gray-500",
  bug: "bg-green-700",
  poison: "bg-purple-400",
  electric: "bg-yellow-600",
  ground: "bg-yellow-900",
  fairy: "bg-purple-700",
  fighting: "bg-red-700",
  psychic: "bg-orange-500",
  rock: "bg-gray-600",
  ghost: "bg-purple-600",
  ice: "bg-blue-300",
  dragon: "bg-blue-700",
  dark: "bg-gray-800",
  steel: "bg-gray-400",
  flying: "bg-blue-200"
}




function PokemonListItem({ pokemon }) {
  return (
   
   
    <div className="grid items-end bg-slate-700  rounded-lg m-2 hover:shadow-2xl hover:shadow-amber-300 my-5 w-[210px] h-[200px]"> 
    <Link href={`/pokemons/${pokemon.name}`}>
        <div className="text-gray-900 text-xl bg-gray-200 rounded-t-lg text-center shadow-xl p-1">{pokemon.name}</div>
        <div className="h-[120px] m-3">
          
          <div className="text-gray-400 text-sm"> Class: {pokemon.classification}</div>
          <div className="text-gray-400"> Generation: {pokemon.generation}</div>
          <div className="text-red-700 font-bold mt-8" > {pokemon.is_legendary ? 'Legendary Pokemon' : ''}</div>
        </div>
        <div className="h-[24px]">
        <span className={`text-gray-50 grid place-items-center rounded-b-lg ${colorMap[pokemon.type1]}`}>
           <span>{pokemon.type1.toUpperCase()} {pokemon.type2 != "" ? "/" : ''} {pokemon.type2.toUpperCase()}</span>
        </span>
        </div>
    </Link>
    </div>
 
   
  )
}

export default function PokemonList({ pokemons }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [searchValue, setSearchValue] = useState('');
  const itemsPerPage = 20;

  

  const filterType = (type) => {
    const filtered = type ? pokemons.filter((item) => (item.type1 === type || item.type2 === type)) : pokemons;
    setFilteredPokemons(filtered);
    setCurrentPage(1); // reset to first page when filter changes
  };
  const filterLegendary = () => {
    const filtered = pokemons.filter((item) => item.is_legendary);
    setFilteredPokemons(filtered);
    setCurrentPage(1); // reset to first page when filter changes
  };
  const filterSearch = (searchValue) => {
    const filtered = searchValue ? pokemons.filter((item) => (item.name.toLowerCase().includes(searchValue.toLowerCase()))) : pokemons;
    console.log(searchValue);
    setFilteredPokemons(filtered);
    setCurrentPage(1); // reset to first page when filter changes
    setSearchValue('');
  };
  
  function clearInput() {
    document.getElementById("searchInput").value = "";
    filterType('')
  }

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPokemons.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="grid grid-cols-2 grid-rows-1 mb-2">
      <input id='searchInput' className="p-2 w-36 h-8 m-2 text-black bg-gray-500 rounded-lg" type='text' value='...search...' onChange={e => filterSearch(e.target.value)}></input>
        <button onClick={()=> clearInput() } className='w-24 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-800 rounded bg-gray-300'>Clear</button>
        <button onClick={()=> filterType('') } className='w-24 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-800 rounded bg-gray-300'>All</button>
        <button onClick={()=> filterLegendary() } className='w-24 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-800 rounded bg-amber-400'>Legendary</button>
        
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-9 md:grid-cols-6 grid-rows-6 lg:grid-rows-2 md:grid-rows-3">      
        <button onClick={()=> filterType('fire') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['fire']}`}>Fire</button>
        <button onClick={()=> filterType('water') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['water']}`}>Water</button>
        <button onClick={()=> filterType('grass') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['grass']}`}>Grass</button>
        <button onClick={()=> filterType('normal') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['normal']}`}>Normal</button>
        <button onClick={()=> filterType('bug') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['bug']}`}>Bug</button>
        <button onClick={()=> filterType('poison') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['poison']}`}>Poison</button>
        <button onClick={()=> filterType('electric') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['electric']}`}>Electric</button>
        <button onClick={()=> filterType('ground') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['ground']}`}>Ground</button>
        <button onClick={()=> filterType('fairy') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['fairy']}`}>Fairy</button>
        <button onClick={()=> filterType('fighting') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['fighting']}`}>Fighting</button>
        <button onClick={()=> filterType('psychic') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['psychic']}`}>Psychic</button>
        <button onClick={()=> filterType('rock') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['rock']}`}>Rock</button>
        <button onClick={()=> filterType('ghost') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['ghost']}`}>Ghost</button>
        <button onClick={()=> filterType('ice') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-900 rounded ${colorMap['ice']}`}>Ice</button>
        <button onClick={()=> filterType('dragon') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['dragon']}`}>Dragon</button>
        <button onClick={()=> filterType('dark') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-50 rounded ${colorMap['dark']}`}>Dark</button>
        <button onClick={()=> filterType('steel') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-700 rounded ${colorMap['steel']}`}>Steel</button>
        <button onClick={()=> filterType('flying') } className={`w-16 m-2 hover:shadow-lg hover:shadow-gray-500 text-gray-600 rounded ${colorMap['flying']}`}>Flying</button>
      </div>
    <div className="grid justify-items-center xl:w-[1250px] lg:w-[1010px] md:w-[760px] sm:[620px] content-center bg-black  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-3 m-2">
      {currentItems.length > 0 ? (
        currentItems.map((pokemon, index) => <PokemonListItem pokemon={pokemon} key={index} />)
      ) : (
        <h1 className="text-3xl text-gray-600"> No pokemons in database </h1>
      )}
      </div>
      <div className="flex">
       <Paging itemsPerPage={itemsPerPage} totalItems={filteredPokemons.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
       </div>

    </div>
    
  )
}