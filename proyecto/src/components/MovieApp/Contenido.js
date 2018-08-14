import React from  'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Peliculas from '../../containers/PeliculasContainer'
import HomeContainer from '../../containers/HomeContainer'
import MiLista from '../Pages/MiLista'
import Series from '../Pages/Series'


const Contenido = () => {
  return(
  <Switch>
    <Route exact path='/' component={HomeContainer} />
    <Route path='/peliculas' component={Peliculas} />
    <Route path='/milista' component={MiLista} />
    <Route path='/series' component={Series} />
  </Switch>)
}

export default Contenido;
