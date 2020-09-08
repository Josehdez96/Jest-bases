import { getDataFromApi } from '../promise';

describe('Probar Async/Await', () => {
  test('Realizar una peticion a la Api', async () => {
    const api = 'https://rickandmortyapi.com/api/character';
    const getRick = 'https://rickandmortyapi.com/api/character/1';
    await getDataFromApi(api).then((data) => {
      // comprobación 1
      expect(data.results.length).toBeGreaterThan(0);
    });
    await getDataFromApi(getRick).then((data) => {
      // comprobación 2
      expect(data.name).toEqual('Rick Sanchez');
    });
  });
});
