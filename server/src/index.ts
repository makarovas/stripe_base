import {config} from 'dotenv';
if(process.env.NODE_ENV !== 'dev') {
  config();
}


import Stripe from 'stripe';
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: '2020-03-02'
})

import {app} from './api';

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`API run on http://localhost:${port}`));