import Settings from '../settings';

test('Правильно создается объект класса Settings', () => {
  const settings = new Settings();
  expect(settings.defaultSettings.size).toBe(3);
  expect(settings.settingOptions.size).toBe(3);
  expect(settings.userSettings.size).toBe(0);
});

test('Правильно работает метод setUserSetting класса Settings', () => {
  const settings = new Settings();
  settings.setUserSetting('difficulty', 'normal');
  expect(settings.userSettings.size).toBe(1);
  expect(settings.userSettings.has('difficulty')).toBe(true);
  expect(settings.userSettings.get('difficulty')).toBe('normal');
});

test('Правильно отрабатывает throw метода setUserSetting класса Settings', () => {
  expect(() => {
    const settings = new Settings();
    settings.setUserSetting('1', 'normal');
  }).toThrow();

  expect(() => {
    const settings = new Settings();
    settings.setUserSetting('difficulty', '1');
  }).toThrow();
});

test('Правильно работает метод getSettings класса Settings', () => {
  const settings = new Settings();
  settings.setUserSetting('difficulty', 'normal');
  const resultSettings = settings.getSettings();
  const correctValues = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'normal'],
  ]);
  expect(resultSettings).toEqual(correctValues);
});
