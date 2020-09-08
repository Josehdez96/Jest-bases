import { getCharacter } from '../snapshot';
import james from '../james.json';

describe('Probando los snapshots', () => {
  test('Snapshot de James', () => {
    expect(getCharacter(james)).toMatchSnapshot();
  });

  test('Siempre fallará el snapshot', () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20),
    };
    expect(user).toMatchSnapshot();
  });

  test('Tenemos una excepcion', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: 'James Juan',
    };
    expect(user).toMatchSnapshot({
      //Aquí va la excepcion
      id: expect.any(Number),
    });
  });
});
