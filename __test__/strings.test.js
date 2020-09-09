describe('Comprobar cadenas de texto', () => {
  const text = 'Un texto corto';
  test('Debe contener el siguiente texto', () => {
    expect(text).toMatch(/corto/);
  });
  test('NO contiene una palabra', () => {
    expect(text).not.toMatch(/juan/);
  });
  test('Comprobar el tamaño del texto', () => {
    expect(text).toHaveLength(14);
  });
  test('Comprobar el tipo: String', () => {
    expect(typeof text).toBe('string');
  });
});
