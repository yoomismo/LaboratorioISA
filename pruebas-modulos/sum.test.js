const suma = require('../calc-modulos/sum');


test('sumar 1 + 2 igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});