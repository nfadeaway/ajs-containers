import Character from '../character';

test('Правильно создается объект класса Character', () => {
  const character = new Character('Персонаж', 'Bowman');
  const correctValues = {
    name: 'Персонаж',
    type: 'Bowman',
  };
  expect(character).toEqual(correctValues);
});
