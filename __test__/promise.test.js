import { getDataFromApi } from '../promise';

describe('fetching de datos con axios/promesas', () => {
  test('Debe obtener datos de la Api', (done) => {
    const api = 'https://rickandmortyapi.com/api/character';
    getDataFromApi(api).then((data) => {
      // console.log(data.results);
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
});

describe('Testing resolve y reject de promesas', () => {
  test('Resuelve un Hola!(promesa)', () => {
    return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
  });

  test('Rechaza con un error', () => {
    return expect(Promise.reject('Error!!')).rejects.toBe('Error!!');
  });
});
