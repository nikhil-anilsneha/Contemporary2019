import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-react';
import './index.css';
import App from './App';
import Signup from './components/LoginForm'
import * as serviceWorker from './serviceWorker';
import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.css';
import Tree from './components/tree';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
