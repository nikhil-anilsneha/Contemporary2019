import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-react';
import './index.css';
import Login from './components/Login'
import App from './App';
import cartReducer from './components/reducers/cartReducer';
import Signup from './components/Register'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
// import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(cartReducer);
ReactDOM.render(
<Provider store={store}><App /></Provider>, 
document.getElementById('root'));

/* ReactDOM.render(<Cart />, document.getElementById('root'));
serviceWorker.unregister(); */
