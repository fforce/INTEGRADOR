import React from  'react'
import {Switch, Route} from 'react-router-dom'
import Peliculas from '../../containers/PeliculasContainer'
import HomeContainer from '../../containers/HomeContainer'
import MiLista from '../../containers/MiListaContainer'
import Series from '../../containers/SeriesContainer'

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
