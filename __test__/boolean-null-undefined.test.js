import { isNull, isTrue, isFalse, isUndefined } from '../true';

describe('Probar resultados nulos', () => {
  test('retornar null', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Probar resultados indefinidos', () => {
  test('retornar undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe('Probar resultados verdaderos', () => {
  test('retornar true', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('Probar resultados falsos', () => {
  test('retornar false', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe('Probar resultados NO verdaderos', () => {
  test('retornar NO true', () => {
    expect(isFalse()).not.toBeTruthy();
  });
});
