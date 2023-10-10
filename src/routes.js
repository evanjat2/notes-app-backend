const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIDHandler,
  editBookByIDHandler,
  deleteBookByIDHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIDHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIDHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIDHandler,
  },
];

module.exports = routes;
