import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';


import {AppRouter} from "./AppRouter";


ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
