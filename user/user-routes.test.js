const request = require('supertest');

const server = require('./user-routes');

describe('add user', async () => {
  it('returns status code 201 OK', () => {
    console.log('add');
  });

  it('returns status json', () => {
    console.log('json check');
  });
});

describe('delete user ', () => {
  it('returns status code 202 Accepted', () => {
    console.log('delete user');
  });

  it('returns status json', () => {
    console.log('json check');
  });
});
