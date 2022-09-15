import React, { useEffect, useState } from "react"
import CharactersC from "./CharactersC"
import '../Characters/Characters.css'

function NavPage(props){
    return(
        <div className='btns'>
            <button onClick={()=>props.setPage(props.page - 1)} className='bnav'>Anterior</button>
            <h2>{props.page}</h2>
            <button onClick={()=>props.setPage(props.page + 1)} className='bnav'>Siguiente</button>
        </div>
    )
}

export const CharactersD = () => {

    const[person,setPerson]=useState([])
    const[page,setPage]=useState(1)

    useEffect(()=>{
        async function getdata() {
            const character = await fetch(`https://swapi.dev/api/people/?page=${page}`)
            const data = await character.json()
            setPerson(data.results)
        }
        getdata();
    },[page])

  return (
    <div className='curpf'>
        {(person.map(person=>(
            <CharactersC key={person.name} person={person}/>            
        )))}
        <NavPage page={page} setPage={setPage}/>
    </div>
  )
}