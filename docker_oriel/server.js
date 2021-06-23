const express = require('express');

var cowsay = require('cowsay');
// Constants
// const hostname = '127.0.0.1';
const hostname = '0.0.0.0';
const port = 8080;

// App
const app = express();

//Function who write the message
function cowSayMessage(Message, Eyes, Mouth){
    return cowsay.say({
        text: Message,
        e: Eyes,
        T: Mouth
      })
}

// GET method route
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/txt');
    res.end(
        cowSayMessage("HOLA ME LLAMO ORIEL CHAVERRA Y ESTO ES UN METODO GET!", "OO", "U")
    );
});
  
// POST method route
app.post('/', function (req, res) {
    res.setHeader('Content-Type', 'text/txt');
    res.end(
        cowSayMessage("HOLA ME LLAMO ORIEL CHAVERRA Y ESTO ES UN METODO POST!", "**", "Q")
    );
});

// GET method route
app.get('/secret', function (req, res, next) {
    res.setHeader('Content-Type', 'text/txt');
    res.end(
        cowSayMessage("Never be cruel, never be cowardly. And never eat pears!", "--", "-")
    );
    console.log('This is a console.log message.');
});

app.listen(port, hostname);
console.log(`Running on http://${hostname}:${port}`);
