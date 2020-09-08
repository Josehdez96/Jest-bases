import { getDataFromApi } from '../promise';

describe('Probar Async/Await', () => {
  // Este test solo se soluciona exitosamente SOLO si las dos comprobaciones se cumlen
  test('Realizar una peticion a la Api', async () => {
    const api = 'https://rickandmortyapi.com/api/character';
    const getRick = 'https://rickandmortyapi.com/api/character/1';
    // comprobación 1 USANDO solo async/await
    const data = await getDataFromApi(api);
    expect(data.results.length).toBeGreaterThan(0);

    // comprobación 2 USANDO async/await y then (promesas)
    await getDataFromApi(getRick).then((data) => {
      expect(data.name).toEqual('Rick Sanchez');
    });
  });

  // Esta prueba debería estar fallando, ya que solo pasa si arroja un error. Cuidado con esta prueba
  test('Realizando una petición a una Api con error', async () => {
    const apiError = 'http://httpstat.us/404';
    const peticion = getDataFromApi(apiError);
    // Aquí es cuando realmente se resuelve la promesa, por eso el await va aca
    await expect(peticion).rejects.toEqual(
      Error('Request failed with status code 404')
    );
  });

  test('Resuelve un Hola!', async () => {
    await expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
    await expect(Promise.reject('Buenas error')).rejects.toBe('Buenas error');
  });
});
