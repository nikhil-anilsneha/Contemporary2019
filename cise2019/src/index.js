import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-react';
import './index.css';
import Login from './components/Login'
import App from './App';
import Signup from './components/Register'
import * as serviceWorker from './serviceWorker';
// import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.css';
import AshTree from './components/AshTree';
import AppleTree from './components/AppleTree';
import TomatoTree from './components/TomatoTree';
import OakTree from './components/OakTree';
import KingPalmTree from './components/KingPalmTree';
import CascadePalmTree from './components/CascadePalmTree';

ReactDOM.render(<AshTree />, document.getElementById('root'));
serviceWorker.unregister();
