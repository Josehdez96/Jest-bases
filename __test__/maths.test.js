import { sumar, restar, multiplicar, dividir } from '../maths';

describe('Calculos matematicos', () => {
  test('Calculo: sumar', () => {
    expect(sumar(2, 2)).toBe(4);
  });
  test('Calculo: restar', () => {
    expect(restar(5, 1)).toBe(4);
  });

  test('Calculo: multiplicar', () => {
    expect(multiplicar(5, 1)).toBe(5);
  });
  test('Calculo: dividir', () => {
    expect(dividir(20, 2)).toBe(10);
  });
});
