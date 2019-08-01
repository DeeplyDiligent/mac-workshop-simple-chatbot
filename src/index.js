import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './utils/serviceWorker';
import Routes from './routes/routes';

ReactDOM.render(<Routes />, document.getElementById('root'));
serviceWorker.unregister();
