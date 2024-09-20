const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 10 / 5 to equal 2', () => {
  expect(calculator.divide(10, 5)).toBe(2)
})

test('divide 30 / 2 to equal 15', () => {
  expect(calculator.divide(30, 2)).toBe(15)
})

test('multiply 15 * 4 to equal 60', () => {
  expect(calculator.multiply(15, 4)).toBe(60)
})

test('multiply -5 * -4 to equal 20', () => {
  expect(calculator.multiply(-5, -4)).toBe(20)
})

test('divide 7 / 0 to equal "no se puede dividir entre 0"', () => {
  expect(calculator.divide(7, 0)).toBe("no se puede dividir entre 0")
})