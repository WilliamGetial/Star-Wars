import React from 'react'
import images from '../images/images';
import './Planets.css';
import { Link } from 'react-router-dom'

function PlanetsC({planet}) {
    return (
      <div className='cardspl'>
          <div>
              <img className='imgplanet' src={images.imgpl}/>
          </div>
          <div className='dat-infpl'>
              <h6>Nombre:</h6>
              <p>{planet.name}</p>
              <h6>Rotación:</h6>
              <p>{planet.rotation_period}</p>
              <h6>Orbital:</h6>
              <p>{planet.orbital_period}</p>
              <h6>Diámetro:</h6>
              <p>{planet.diameter}</p>
              <h6>Clima:</h6>
              <p>{planet.climate}</p>
              <h6>Gravedad:</h6>
              <p>{planet.gravity}</p>
              <h6>Terreno:</h6>
              <p>{planet.terrain}</p>
              <h6>Nivel del Agua:</h6>
              <p>{planet.surface_water}</p>
              <h6>Populación</h6>
              <p>{planet.population}</p>
              <Link to={``}><button className='vmsp'>Ver más</button></Link>
          </div>
      </div>
    )
  }
  
  export default PlanetsC