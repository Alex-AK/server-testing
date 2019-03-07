const request = require('supertest');

const server = require('../api/server');

describe('add user', () => {
  it('returns status code 201 Created', async () => {
    const res = await request(server)
      .post('/api/users')
      .send({ username: 'admin' });

    expect(res.status).toBe(201);
  });

  it('returns status json', async () => {
    const res = await request(server)
      .post('/api/users')
      .send({ username: 'admin' });

    expect(res.type).toBe('application/json');
  });
});

describe('delete user ', () => {
  it.skip('returns status code 202 Accepted', async () => {
    const res = await request(server).delete({});
  });

  it('returns status json', () => {
    console.log('json check');
  });
});
