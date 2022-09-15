import React, { useEffect, useState } from 'react'
import PlanetsC from './PlanetsC'
import '../Planets/Planets.css'

function NavPage(props){
    return(
        <div className='btnp'>
            <button onClick={()=>props.setPage(props.page - 1)} className='btnav'>Anterior</button>
            <h2>{props.page}</h2>
            <button onClick={()=>props.setPage(props.page + 1)} className='btnav'>Siguiente</button>
        </div>
    )
}

export const PlanetsD = () => {

    const[planet,setPlanet]=useState([]);
    const[page,setPage]=useState(1);

    useEffect(()=>{
        async function getdata() {
            const world = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
            const data = await world.json()
            setPlanet(data.results)
        }
        getdata();
    },[page]);

  return (
    <div className='curpl'>
        {(planet.map(planet=>(
            <PlanetsC key={planet.name} planet={planet}/>
        )))}
        <NavPage page={page} setPage={setPage}/>
    </div>
  )
}