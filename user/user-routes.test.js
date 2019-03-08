const request = require('supertest');

const server = require('../api/server');

const db = require('../data/dbConfig');

describe('add user', () => {
  afterEach(async () => {
    await db('users').truncate();
  });
  it('returns status code 201 Created', async () => {
    const res = await request(server)
      .post('/api/users')
      .send({ username: 'adminTest' });

    expect(res.status).toBe(201);
  });

  it('returns status json', async () => {
    const res = await request(server)
      .post('/api/users')
      .send({ username: 'adminTest' });

    expect(res.type).toBe('application/json');
  });
});

describe('delete user ', () => {
  it.only('returns status code 202 Accepted', async () => {
    const userRes = await request(server)
      .post('/api/users')
      .send({ username: 'adminToDelete' });

    expect(userRes.status).toBe(201);

    const res = await request(server).delete('/api/users/1');

    expect(res.status).toBe(202);
  });

  it('returns status code 404 when no user', async () => {
    const res = await request(server).delete('/api/users');

    expect(res.status).toBe(404);
  });
});
