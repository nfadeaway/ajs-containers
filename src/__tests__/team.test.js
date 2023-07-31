import Team from '../team';
import Character from '../character';

test('Правильно создается объект класса Team', () => {
  const team = new Team();
  expect(team.members.size).toBe(0);
});

test('Правильно работает метод add класса Team', () => {
  const character = new Character('Персонаж', 'Bowman');
  const team = new Team();
  team.add(character);
  expect(team.members.has(character)).toBe(true);
  expect(team.members.size).toBe(1);
});

test('Правильно отрабатывает throw метода add класса Team', () => {
  expect(() => {
    const character = new Character('Персонаж', 'Bowman');
    const team = new Team();
    team.add(character);
    team.add(character);
  }).toThrow();
});

test('Правильно работает метод addAll класса Team', () => {
  const characterOne = new Character('Персонаж', 'Bowman');
  const characterTwo = new Character('Персонаж', 'Bowman');
  const team = new Team();
  team.addAll(characterOne, characterTwo, characterOne, characterTwo);
  expect(team.members.has(characterOne)).toBe(true);
  expect(team.members.has(characterTwo)).toBe(true);
  expect(team.members.size).toBe(2);
});

test('Правильно работает метод toArray класса Team', () => {
  const characterOne = new Character('Персонаж', 'Bowman');
  const characterTwo = new Character('Персонаж', 'Bowman');
  const team = new Team();
  team.addAll(characterOne, characterTwo, characterOne, characterTwo);
  const correctValues = { members: [{ name: 'Персонаж', type: 'Bowman' }, { name: 'Персонаж', type: 'Bowman' }] };
  team.toArray();
  expect(team).toEqual(correctValues);
});
