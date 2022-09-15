import React from 'react'
import {NavbarApp} from '../components/NavbarApp/NavbarApp';
import {FooterApp} from '../components/FooterApp/FooterApp';
import { PlanetsD } from '../components/Planets/PlanetsD';

function Planetas(){
  return(
    <div>
      <NavbarApp/>
      <PlanetsD/>
      <FooterApp/>
    </div>
  )
}
export default Planetas;