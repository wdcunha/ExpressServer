const knex = require('./index')
const log = console.log

// Inserting into the posts table
// const insertQuery = knex
//   .insert({username: 'Jon Snow', content: 'Winter is here!'})
//   .into('posts');
const insertQuery = knex
  .insert({username: 'Jon Snow', content: 'Winter is here!'})
  .into('posts')
  .returning('*');//this line brings more useful information and in a better and organized way

log('Running ...');
// Calling `.toString()` on a query will show the exact
// SQL that will be run by that query without executing it.
log(insertQuery.toString());

// to send to postgres  (because until now, nothing was sent) the line below is needed:

// To execute a query (send it to postgres), you must
// call query with `.then()`. Then, takes a callback
// that will receive the result of executing query when it is
// complete. Running queries in JavaScript is asynchonous
// like setTimeout.
insertQuery
  .then(result => log(result))
  .then(() => log(allPostsQuery.toString())) //this line solve the problem of being assyncronous
  .then(() => allPostsQuery.then(result => log(result))); //show all posts, what leaves it big in the console screen


  // List all posts
  const allPostsQuery = knex
    .select()
    .from('posts');

  // log(allPostsQuery.toString());  ----> was put inside second then to show in order because JavaScript is assyncronous
