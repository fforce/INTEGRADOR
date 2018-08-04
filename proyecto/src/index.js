import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/MovieApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
