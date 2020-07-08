import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';


export const stripePromise = loadStripe(
  'pk_test_51H2jRCK2oXBcLUP6kQaTIt1qlPEnYUqCmrppMV8Hb7r3nUDcTl6tQhLH699IWlxZxC9iepZmkCQ9LTSo80IvT0AZ00UEvyeaD9'
).then

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
