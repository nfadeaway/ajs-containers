export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Ошибка №1'],
      [2, 'Ошибка №2'],
      [100, 'Ошибка №100'],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}
