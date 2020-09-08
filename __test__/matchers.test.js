describe('Comparadores comunes', () => {
  const user = {
    name: 'Jose',
    lastname: 'Hernandez',
  };
  const user2 = {
    name: 'Jose',
    lastname: 'Hernandez',
  };

  test('Igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });

  test('No son exactamente iguales', () => {
    expect(user).not.toEqual(user2);
  });
});
