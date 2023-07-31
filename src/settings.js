export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.settingOptions = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);

    this.userSettings = new Map();
  }

  setUserSetting(setting, value) {
    if (!this.settingOptions.has(setting)) {
      throw new Error('Такого параметра не существует');
    }
    if (!(this.settingOptions.get(setting).includes(value))) {
      throw new Error('Такого варианта параметра не существует');
    }
    this.userSettings.set(setting, value);
  }

  getSettings() {
    const settings = this.defaultSettings;
    for (const userSetting of this.userSettings) {
      settings.set(userSetting[0], userSetting[1]);
    }
    return settings;
  }
}
