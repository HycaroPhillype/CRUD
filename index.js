import express, { json } from 'express';

const server = express();

server.use(express.json());

const cars = [ 'Fiat', 'Volkswagen', 'Hyundai', 'Honda', 'JEEP'];

server.get('/cars/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cars[index]);
});

server.get('/cars', (req, res) => {
    return res.json(cars)
});

server.post('/cars', (req, res) => {
    const { name } = req.body;
    cars.push(name);

    return res.json(cars);
});

server.put('/cars/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cars[index] = name;

    console.log(cars[index])

    return res.json(cars)
});

server.delete('/cars/:index', (req, res) => {
    const { index } = req.params;

    cars.splice(index, 1);

    return res.json(( "message: O modelo foi deletado"));
});

const port = 3000

server.listen(port, () => {
    console.log('servidor rodando em http://localhost:3000')
});



