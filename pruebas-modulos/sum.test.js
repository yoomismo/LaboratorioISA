const suma = require('../calc-modulos/sum');
const sum = require('./sum.test');

test('sumar 1 + 2 igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});