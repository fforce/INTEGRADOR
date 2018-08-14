import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/MovieApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware , compose} from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import MovieApi  from './API/MovieApi'

const api = new MovieApi()



const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(api)),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);


  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
  , document.getElementById('root'));
