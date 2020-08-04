import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ result: 'TEST-API' }));

routes.get('/users', (req, res) =>
  res.json({
    users: [
      {
        name: 'cristian',
        age: 21,
      },
      {
        name: 'bruno',
        ag: 30,
      },
    ],
  })
);

export default routes;
