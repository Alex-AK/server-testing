describe('server', () => {
  it('should run on testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
});
