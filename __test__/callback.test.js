import { callbackHell } from '../callback';

describe('Prueba a un callback', () => {
  test('callback', (done) => {
    function otherCallback(data) {
      expect(data).toBe('Hola callbacks');
      done();
    }
    callbackHell(otherCallback);
  });
});
