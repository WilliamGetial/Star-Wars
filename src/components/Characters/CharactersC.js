import React from 'react'
import './Characters.css'
import images from '../images/images'
import { Link } from 'react-router-dom'

function CharactersC({person}) {
  return (
    <div className='cardsch'>
        <div>
          <img className='imgperfil' src={images.imgpf} />
        </div>
        <div className='dat-infch'>
          <h6>Nombre:</h6>
          <p>{person.name}</p>
          <h6>Género:</h6>
          <p>{person.gender}</p>
          <h6>Altura:</h6>
          <p>{person.height}</p>
          <h6>Peso:</h6>
          <p>{person.mass} Kg</p>
          <h6>Nacimiento:</h6>
          <p>{person.birth_year}</p>
          <Link to={``}><button className='vms'>Ver más</button></Link>
        </div>
    </div>
  )
}

export default CharactersC