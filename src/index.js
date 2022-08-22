// Lets declare a variable for app which will represent the actual api
const express = require('express');
const app = express();
const PORT  = process.env.PORT || 3000;

// We need to set up a middleware to parse JSON before the data hits the function that handles the request
// Every request that comes in will first go through this express.json middleware which will convert the body to JSON
app.use(express.json());

// The way we fire our API to the server is by using the listen method on the app object and passing in the port number.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}) 

// We need to add an endpoint to our API that will return a string.
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
})

// For example, we can add a route that will return a string with the name of the person who is making the request.
// app.get('/:name', (req, res) => { // :name is a parameter that will be passed in the URL
//   res.status(200).send(`Hello ${req.params.name}`);
// })

// We can also return a JSON object. For example: 
app.get('/tshirt', (req, res) => {
  res.status(200).send({
    name: 'T-Shirt',
    price: '$10.00'
  });
})

// When we use POST request it means that the user will create new data and send it to the server. A new tshirt in this case
// A dynamic url parameter that represents the id of a tshirt
app.post('/tshirt/:id', (req, res) => {

// The req.params object will contain all the parameters that were passed in the URL.
// The req.body object will contain all the data that was sent in the request body.

  const { id } = req.params;
  const { logo } = req.body;

  // We check if we have a logo in the request body. If we don't have a logo, we return an error.
  if (!logo) {
    return res.status(400).send('Missing logo');
  } else {
    // If we have a logo, we return a success message.
    return res.status(200).send(`T-Shirt with id ${id} has been created with logo ${logo}`);
  }

})