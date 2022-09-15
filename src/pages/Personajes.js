import React, { useEffect } from 'react'
import {NavbarApp} from '../components/NavbarApp/NavbarApp';
import {FooterApp} from '../components/FooterApp/FooterApp';
import { CharactersD } from '../components/Characters/CharactersD';

function Personajes(){
  return(
    <div>
      <NavbarApp/>
      <CharactersD/>
      <FooterApp/>
    </div>
  )
}
export default Personajes;