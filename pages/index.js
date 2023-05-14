import Head from 'next/head'
import Link from 'next/link'


export default function Home(){
  return (
    <>
    <Head>
      <title>Pokedex App - Code Lancashire - Pawel Czarczynski</title>
    </Head>
    <div className="mx-auto p-5">
    <div className='flex w-screen h-screen justify-center'>
      <div className='flex flex-col opacity-90 hover:opacity-100 items-center justify-start'>
      <img className='p-5 w-1/3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png'></img>
      <img className='p-5 pl-5 w-1/4' src='https://corporate.pokemon.com/char-pikachu-57d9f7946973b66cc4351807500acb15.png'></img>
      <Link className='w-1/4 mt-5' href='/pokemons'>
        <button className='w-full bg-[#21386e] rounded-full p-2 px-4 text-[#c7a088] text-sm  md:text-xl lg:text-2xl  font-bold font-serif'>Enter Site</button>
      </Link>
      </div>
    </div>
   
    </div>
    </>
  )
}