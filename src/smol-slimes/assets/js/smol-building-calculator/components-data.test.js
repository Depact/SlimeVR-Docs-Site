import { describe, it, expect } from 'vitest';
import { componentCategories } from './components-data.js';

const SET = { LOWER: 5, CORE: 6, ENHANCED: 8, FULL: 10 };

function cat(name) {
  return componentCategories.find(c => c.name.startsWith(name));
}
function choice(category, index) {
  return cat(category).choices[index];
}
function strip(s) {
  return s.replace(/<[^>]*>/g, '').trim();
}

describe('Microcontroller', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${"6 (20% overage)"}
    ${SET.CORE} | ${"8 (20% overage)"}
    ${SET.ENHANCED}| ${"10 (20% overage)"}
    ${SET.FULL} | ${"12 (20% overage)"}
  `('nRF52840: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Microcontroller', 0).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Microcontroller', 1).amount(set)).toBe(expected);
  });
});

describe('IMU', () => {
  for (let i = 0; i < 3; i++) {
    const c = choice('IMU', i);
    it.each`
      set          | expected
      ${SET.LOWER}| ${SET.LOWER}
      ${SET.CORE} | ${SET.CORE}
      ${SET.ENHANCED}| ${SET.ENHANCED}
      ${SET.FULL} | ${SET.FULL}
    `(`${strip(c.name)}: $expected for $set trackers`, ({ set, expected }) => {
      expect(c.amount(set)).toBe(expected);
    });
  }
});

describe('Button', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${SET.LOWER}
    ${SET.CORE} | ${SET.CORE}
    ${SET.ENHANCED}| ${SET.ENHANCED}
    ${SET.FULL} | ${SET.FULL}
  `('3X4X2MM SMD: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Button', 0).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Button', 1).amount(set)).toBe(expected);
  });
});

describe('Batteries', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${SET.LOWER}
    ${SET.CORE} | ${SET.CORE}
    ${SET.ENHANCED}| ${SET.ENHANCED}
    ${SET.FULL} | ${SET.FULL}
  `('401230 120mAh: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Batteries', 0).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Batteries', 1).amount(set)).toBe(expected);
  });
});

describe('Kapton Tape', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${1}
    ${SET.CORE} | ${1}
    ${SET.ENHANCED}| ${1}
    ${SET.FULL} | ${1}
  `('Width 20MM: $expected roll for $set trackers', ({ set, expected }) => {
    expect(choice('Kapton', 0).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Kapton', 1).amount(set)).toBe(expected);
  });
});

describe('Wire for trackers', () => {
  for (let i = 0; i < 3; i++) {
    const c = choice('Wire', i);
    it.each`
      set          | expected
      ${SET.LOWER}| ${1}
      ${SET.CORE} | ${1}
      ${SET.ENHANCED}| ${1}
      ${SET.FULL} | ${1}
    `(`${strip(c.name)}: $expected for $set trackers`, ({ set, expected }) => {
      expect(c.amount(set)).toBe(expected);
    });
  }

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Wire', 3).amount(set)).toBe(expected);
  });
});

describe('Cases', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${SET.LOWER}
    ${SET.CORE} | ${SET.CORE}
    ${SET.ENHANCED}| ${SET.ENHANCED}
    ${SET.FULL} | ${SET.FULL}
  `('3D printed: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Cases', 0).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Cases', 1).amount(set)).toBe(expected);
  });
});

describe('Straps', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${SET.LOWER}
    ${SET.CORE} | ${SET.CORE}
    ${SET.ENHANCED}| ${SET.ENHANCED}
    ${SET.FULL} | ${SET.FULL}
  `('DIY Depact V3: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Straps', 0).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${1}
    ${SET.CORE} | ${2}
    ${SET.ENHANCED}| ${2}
    ${SET.FULL} | ${2}
  `('AliExpress + GoPro: $expected packs for $set trackers', ({ set, expected }) => {
    expect(choice('Straps', 1).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${1}
    ${SET.CORE} | ${2}
    ${SET.ENHANCED}| ${2}
    ${SET.FULL} | ${2}
  `('Amazon: $expected packs for $set trackers', ({ set, expected }) => {
    expect(choice('Straps', 2).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Straps', 3).amount(set)).toBe(expected);
  });
});

describe('Dongle', () => {
  for (let i = 0; i < 3; i++) {
    const c = choice('Dongle', i);
    it.each`
      set          | expected
      ${SET.LOWER}| ${1}
      ${SET.CORE} | ${1}
      ${SET.ENHANCED}| ${1}
      ${SET.FULL} | ${2}
    `(`${strip(c.name)}: $expected dongles for $set trackers`, ({ set, expected }) => {
      expect(c.amount(set)).toBe(expected);
    });
  }

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Dongle', 3).amount(set)).toBe(expected);
  });
});

describe('Dock', () => {
  it.each`
    set          | expected
    ${SET.LOWER}| ${1}
    ${SET.CORE} | ${1}
    ${SET.ENHANCED}| ${2}
    ${SET.FULL} | ${2}
  `('Depact Sudo Dock: $expected hubs for $set trackers', ({ set, expected }) => {
    expect(choice('Dock', 1).amount(set)).toBe(expected);
  });

  it.each`
    set          | expected
    ${SET.LOWER}| ${0}
    ${SET.CORE} | ${0}
    ${SET.ENHANCED}| ${0}
    ${SET.FULL} | ${0}
  `('Sourced elsewhere: $expected for $set trackers', ({ set, expected }) => {
    expect(choice('Dock', 0).amount(set)).toBe(expected);
  });
});
