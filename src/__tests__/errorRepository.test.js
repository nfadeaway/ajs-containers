import ErrorRepository from '../errorRepository';

test('Правильно создается объект класса ErrorRepository', () => {
  const errors = new ErrorRepository();
  expect(errors.errors.size).toBe(3);
});

test('Правильно работает метод translate класса ErrorRepository', () => {
  const errors = new ErrorRepository();
  expect(errors.translate(1)).toBe('Ошибка №1');
  expect(errors.translate(2)).toBe('Ошибка №2');
  expect(errors.translate(100)).toBe('Ошибка №100');
  expect(errors.translate(4)).toBe('Unknown error');
});
