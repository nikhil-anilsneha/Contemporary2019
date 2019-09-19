import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-react';
import './index.css';
import Login from './components/Login'
import App from './App';
import Signup from './components/Register'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from'./store';
// import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.css';
import Tree from './components/tree';
import Cart from './components/cart.js';

ReactDOM.render(
<Provider store={store}><Cart /></Provider>, 
document.getElementById('root'));

/* ReactDOM.render(<Cart />, document.getElementById('root'));
serviceWorker.unregister(); */
