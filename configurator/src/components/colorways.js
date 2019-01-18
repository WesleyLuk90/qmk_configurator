export default {
  /*
   * List of codes we should use icons for instead of text
   */
  iconCodes: {
    KC_UP: 'arrow-up',
    KC_DOWN: 'arrow-down',
    KC_LEFT: 'arrow-left',
    KC_RGHT: 'arrow-right'
  },
  /*
   * List of keycodes that considered mods
   */
  modCodes: [
    'KC_F1',
    'KC_F2',
    'KC_F3',
    'KC_F4',
    'KC_F5',
    'KC_F6',
    'KC_F7',
    'KC_F8',
    'KC_F9',
    'KC_F10',
    'KC_F11',
    'KC_F12',
    'KC_LEFT',
    'KC_RGHT',
    'KC_UP',
    'KC_DOWN',
    'KC_PSCR',
    'KC_SLCK',
    'KC_PAUS',
    'KC_INS',
    'KC_DEL',
    'KC_HOME',
    'KC_END',
    'KC_PGUP',
    'KC_PGDN'
  ].reduce((acc, code) => {
    acc[code] = true;
    return acc;
  }, {}),
  /**
   * returns the correct icons for the identified platform
   */
  platformIcons(platform) {
    let icon = [];
    switch (platform) {
      case 'MacIntel':
      case 'Macintosh':
      case 'MacPPC':
      case 'iPhone':
      case 'iPad':
        icon = ['fab', 'apple'];
        break;
      case 'Linux i686':
      case 'Linux x86_64':
      case 'Linux armv7l':
        icon = ['fab', 'linux'];
        break;
      case 'Win32':
        icon = ['fab', 'windows'];
        break;
      default:
        // fall back to text if we can't detect
        icon = undefined;
    }

    return {
      KC_LGUI: icon,
      KC_RGUI: icon
    };
  }
};