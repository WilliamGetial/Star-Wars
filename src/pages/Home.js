import React from 'react'
import {NavbarApp} from '../components/NavbarApp/NavbarApp';
import {FooterApp} from '../components/FooterApp/FooterApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import images from '../components/images/images';
import '../App.css';
import Card from 'react-bootstrap/Card';

function Home(){
  return(
    <div className='cerp'>
      <NavbarApp/>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.img2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.img3}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.img4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <br></br>
      <h4 className='invg'>Star Wars</h4>
    <p className='invg'>Star Wars, traducido al español como La Guerra de las Galaxias, es una franquicia compuesta de películas, 
      novelas, cómics, videojuegos y juguetes .
    Es un universo de ficción creado por George Lucas.
    La historia de Star Wars utiliza arquetipos comunes a la ciencia ficción,
    climax político y mitología, así como temas musicales de estos aspectos.
    </p>
    <p className='invg'>Siendo uno de los ejemplos más importantes de la space opera (subgénero de ciencia ficción) Star Wars
    se ha convertido en una parte esencial de la cultura popular, así como una de las películas de mayor
    recaudación en taquilla de todos los tiempos y una de las mas aclamadas por el público en general.
    </p>
    <br></br>
    <br></br>
    <div className='etiq'>
      <Card className='cardfot'>
        <Card.Img variant="top" src={images.img5} />
        <Card.Body>
          <Card.Title>Exito Comercial</Card.Title>
          <Card.Text>
          Su éxito ha sido lo bastante grande como para permitir a Lucas crear su propia productora (Lucasfilm)
          y una serie de empresas relacionadas (LucasArts, Industrial Light & Magic, etc.).
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='cardfot1'>
        <Card.Img variant="top" src={images.img6} />
        <Card.Body>
          <Card.Title>Universo Expandido</Card.Title>
          <Card.Text>
          Tras la trilogía original, el universo de ficción de Star Wars siguió creciendo en otros medios,
          principalmente a través de novelas y cómics.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='cardfot'>
        <Card.Img variant="top" src={images.img7} />
        <Card.Body>
          <Card.Title>Las películas y la televisión</Card.Title>
          <Card.Text>
          El argumento de las películas se sitúa "hace mucho tiempo, en una galaxia muy, muy lejana...".
          Allí se ha dado durante siglos un enfrentamiento entre el "lado luminoso de la Fuerza" y el "lado oscuro".
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <br></br>
      <FooterApp/>
    </div>
  )
}
export default Home;