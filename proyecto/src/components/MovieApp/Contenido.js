import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Peliculas from '../../containers/PeliculasContainer'
import HomeContainer from '../../containers/HomeContainer'
import MiLista from '../../containers/MiListaContainer'
import Series from '../../containers/SeriesContainer'
import Nav from '../../containers/NavContainer'

const Contenido = () => {
  return (
    <div>
      <Nav></Nav>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/peliculas' component={Peliculas} />
        <Route path='/milista' component={MiLista} />
        <Route path='/series' component={Series} />
      </Switch>
    </div>)
  }
  
  export default Contenido;
