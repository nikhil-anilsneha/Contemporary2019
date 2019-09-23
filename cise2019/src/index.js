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
import AshTree from './components/AshTree';
import AppleTree from './components/AppleTree';
import TomatoTree from './components/TomatoTree';
import OakTree from './components/OakTree';
import KingPalmTree from './components/KingPalmTree';
import CascadePalmTree from './components/CascadePalmTree';
import LeylandiiHedgeTree from './components/LeylandiiHedgeTree';
import LaurelHedgingTree from './components/LaurelHedgingTree';
import EasternWhitePineTree from './components/EasternWhitePineTree';
import CypressTree from './components/CypressTree';
import BlueGumTree from './components/BlueGumTree';
import RainbowGumTree from './components/RainbowGumTree';
import PohutukawaTree from './components/PohutukawaTree';
import KauriTree from './components/KauriTree';

ReactDOM.render(<AshTree />, document.getElementById('root'));
serviceWorker.unregister();
