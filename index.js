// *** this is the minimal that is needed to run a web server with Express

const express = require('express');
const morgan = require('morgan');

// When we require `express`, we get function that we can call
// to create an "instance of" `express` app. We will use methods
// of the app object to build our web server.
const app = express(); //creates an instance of Express

// ð Configures our application to use `ejs` as the templating engine
// to render our applications HTML pages. The package, ejs, must still
// be installed with npm for this to work.
app.set('view engine', 'ejs');


// it's a high order function that runs middleware that is a function
app.use(morgan('dev')); // we will use this because the simplest information that it gives
// app.use(morgan('combined')); // much more information

/*  ///// >>>>> as we added the line above, this peace of code would be duplicated <<<<

// to use next function from middleware, it's necessary to write this line:
app.use((request, response, next) => {
  console.log(`${request.method} - ${request.path} - ${new Date().toString()}`);
  // The `next` argument is a function that when called tells express
 // that the middleware is finished and its time to move to the next
 // one in line. If you forget to call `next`, your client will appear
 // to load forever while it waits for a response.
  next();  //if there's no this line, the browser won't finish refreshing
});
*/


// when in the URL call /home, this get will run
// the names doesn't matter, but order yes
// The `request` represents a HTTP request. It contains information about the request including the verb,
// the headers any data, etc. The `request` is sent by the client usually a browser.
// The `response` represents a HTTP response. It's object that contains a header & a body of data that our
// application will built to reply to the client's `request`.
// one request give, one response will be given
app.get('/home', (request, response) => {
/*
  response.send(`
    Convergence user centered design disrupt pitch deck food-truck workflow experiential fund workflow grok convergence.
    Steve Jobs big data thinker-maker-doer responsive experiential responsive SpaceTeam piverate engaging pivot long shadow pitch deck.
    User centered design human-centered design disrupt disrupt fund affordances integrate paradigm integrate workflow affordances.
    Iterate grok food-truck quantitative vs. qualitative big data engaging hacker.
  `);

  /*
  response.send(`
    Convergence user centered design disrupt pitch.
  `);
  */

  // `response.render` is used instead of `response.send`
  // to serve the contents of a template in a response.
  // It finalizes the response.

  // The first argument to `response.render` is the file path
  // (not the URL path) to the template we want to render
  // beginning from the `/views` subdirectory without the
  // file extension (i.e. no `.ejs`).
  response.render('home');
});

const DOMAIN = 'localhost';
const PORT = '3002';
app.listen(PORT, DOMAIN, () => {
  // Optionally, `app.listen` can take a third argument that is
  // a callback that will called once and only when the server is ready
  // to handle requests.

  console.log(`ð» Server listenning on http://${DOMAIN}:${PORT}`);
});






// bump
