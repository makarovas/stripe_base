import express, {Request, Response, NextFunction, Request, Request} from 'express';
export const app = express();

app.use(express.json());
import cors from 'cors';

app.use(cors({origin: true}));

app.post('./test', (req: Request, res: Response) => {
  const amount = req.body.amount;
  res.status(200).send({
    with_tax: amount * 7,
  });
});


import {createStripeCheckoutSession} from './checkout';

app.post('/checkout', runAsync(async ({body}: Request, res: Response) => {
  res.send(
      await createStripeCheckoutSession(body.line_items)
  );
}));


function runAsync(callback: Function) {
 return (req: Request, res: Response, next: NextFunction) => {
   callback(req, res, next).catch(next);
 }
}