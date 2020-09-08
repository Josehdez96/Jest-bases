import { arrayColors, arrayFruits } from '../arrays';

describe('Comprobar que existe o no un elemento', () => {
  test('Debe contener un melon', () => {
    expect(arrayFruits()).toContain('melon');
  });
  test('NO debe contener un Platano', () => {
    expect(arrayFruits()).not.toContain('platano');
  });
});

describe('Comprobar tamaño de un array', () => {
  test('Comprobar tamaño de Fruits', () => {
    expect(arrayFruits()).toHaveLength(6);
  });
});

describe('Comprobar que existe un color', () => {
  test('Que tenga azul', () => {
    expect(arrayColors()).toContain('azul');
  });
});
