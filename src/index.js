import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));


serviceWorker.unregister();

