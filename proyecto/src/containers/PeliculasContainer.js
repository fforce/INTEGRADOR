import Peliculas from "../componentes/Pages/Peliculas"
import {connect} from "react-redux"
import loadPopularMovies from "../actions/movies"
const mapStateToProps = (state) => ({
  peliculas: state.movies //llamo al action create para que me maneje el estado y me devuela lo q necesit
  //(osea un return state.draft)
})

//esta es la forma mas cool el motor se encarga de ejecutar
//le paso un objeto literal
const mapDispatchToProps = {
    loadPopularMovies : loadPopularMovies
}



///esta es una forma mas clara de ver
/*const mapDispatchsToProps = (dispatch) => ({
     onChangeDraft: value => dispatch({
       type: CHANGE_DRAFT,
       draft: value
     }),
     submitForm:value => dispatch({
      type: SET_LOGUIN_STATUS,
      login: value
    })
    //onchangedraft es el evento prop de mi componente entonces lo tengo q dispachar
    //onChangeDraft: value => dispatch(draft(value)) // me atiende mas facil
})*/

export default connect(mapStateToProps, mapDispatchToProps)(Peliculas)
