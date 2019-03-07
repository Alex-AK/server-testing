const db = require('../data/dbConfig');

const users = require('./user-model');

describe('users model', () => {
  afterEach(async () => {
    await db('users').truncate();
  });

  it('should add provided user', async () => {
    // de-structure id
    const user = await users.add({
      username: 'admin'
    });

    expect(user.username).toBe('admin');
  });

  it('should delete selected user', async () => {
    const user = await users.add({
      username: 'admin'
    });
    expect(user.username).toBe('admin');

    const deleted = await users.remove({ id: 1 });
    expect(deleted).toBe(null);
  });
});
