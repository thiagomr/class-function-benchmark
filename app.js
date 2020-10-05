/**
 * Function
 */
function AnimalFunction(name) {
    this.name = name;
}

AnimalFunction.prototype.getName = function() {
    return this.name;
}

function DogFunction(name) {
    AnimalFunction.call(this, name);
}

DogFunction.prototype = Object.create(AnimalFunction.prototype);

/**
 * Class
 */

class AnimalClass {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name;
    }
}

class DogClass extends AnimalClass {
    constructor(name) {
        super(name)
    }
}

/**
 * Server App
 */

const express = require('express');
const app = express();

app.get('/class/instance', (req, res) => {
    try {
        const obj = new AnimalClass('jack');

        return res.status(200).send(obj.getName());
    } catch (error) {
        return res.send(500).send('server error');
    }
});

app.get('/function/instance', (req, res) => {
    try {
        const obj = new AnimalFunction('jack');

        return res.status(200).send(obj.getName());
    } catch (error) {
        return res.send(500).send('server error');
    }
});

app.get('/class/inheritance', (req, res) => {
    try {
        const obj = new DogClass('jack');

        return res.status(200).send(obj.getName());
    } catch (error) {
        return res.send(500).send('server error');
    }
});

app.get('/function/inheritance', (req, res) => {
    try {
        const obj = new DogFunction('jack');

        return res.status(200).send(obj.getName());
    } catch (error) {
        return res.send(500).send('server error');
    }
});

app.listen(8000, () => console.log('listen at 8000'));
