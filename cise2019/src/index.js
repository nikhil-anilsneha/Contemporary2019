import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-react';
import './index.css';
import App from './App';
import cartReducer from './components/reducers/cartReducer';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
// import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(cartReducer);
ReactDOM.render(
<Provider store={store}>
    <App /></Provider>, 
document.getElementById('root'));


