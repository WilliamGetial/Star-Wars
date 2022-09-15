import React, { useState } from 'react';

export const UsePerson = () => {
  const [dataPerson , setDataPerson] = useState([]);
  const [Contador , setContador] = useState(1);

  const Disminuir = () => {
    if (Contador <= 1){
      setContador(1);
    }
    else{
      setContador(Contador -1);
    }
  };

  const Aumentar =() => {
    if(Contador < 9){
      setContador(Contador + 1);
    }
    else{
      setContador(9);{

      }
    }
  };
  
  const getAllPeople = async (numberpage) => {
    try{
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      await fetch('https://swapi.dev/api/people/?page=${numberpage}', requestOptions)
      .then(response => response.json())
      .then(result => setDataPerson(result.results))
      .catch(error => console.log('error', error));
      }
      catch (error) {
        console.log(error);
      }
  };  

  return {
    getAllPeople,
    dataPerson,
    Contador,
    Aumentar,
    Disminuir
  };
};
