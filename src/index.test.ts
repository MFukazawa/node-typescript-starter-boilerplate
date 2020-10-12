/* eslint @typescript-eslint/explicit-function-return-type: 0 */

import { shi, kyan } from './index'

describe('catTests', () => {
  beforeEach(() => {
    shi.hungerPoint = 0;
    kyan.hungerPoint = 0;
  })

  test('【条件】しーちゃん、5回遊んだ後に空腹確認→【expected】「まだ大丈夫」', () => {
    for (let i = 0; i < 5; i++) {
      shi.play()
    }
    expect(shi.isHungry).toBe(false);
  });
  
  test('【条件】しーちゃん、9回遊んだ後に空腹確認→【expected】「ハラヘリ」', () => {
    for (let i = 0; i < 9; i++) {
      shi.play()
    }
    expect(shi.isHungry).toBe(true);
  });
  
  test('【条件】しーちゃん、10回遊んだ後に空腹確認→【expected】暴れる', () => {
    for (let i = 0; i < 10; i++) {
      shi.play()
    }
    expect(shi.isBerserk).toBe(true);
  });

  test('【条件】キャンちゃん、2回遊んだ後に空腹確認→【expected】「まだ大丈夫」', () => {
    for (let i = 0; i < 2; i++) {
      kyan.play()
    }
    expect(kyan.isHungry).toBe(false);
  });

  test('【条件】キャンちゃん、3回遊んだ後に空腹確認→【expected】「まだ大丈夫」', () => {
    for (let i = 0; i < 3; i++) {
      kyan.play()
    }
    expect(kyan.isHungry).toBe(true);
  });

  test('【【条件】キャンちゃん、5回遊んだ後に空腹確認→【expected】暴れる', () => {
    for (let i = 0; i < 5; i++) {
      kyan.play()
    }
    expect(kyan.isBerserk).toBe(true);
  });  
})

