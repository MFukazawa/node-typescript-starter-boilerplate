"use strict";
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('catTests', () => {
    beforeEach(() => {
        index_1.shi.hungerPoint = 0;
        index_1.kyan.hungerPoint = 0;
    });
    test('【条件】しーちゃん、5回遊んだ後に空腹確認→【expected】「まだ大丈夫」', () => {
        for (let i = 0; i < 5; i++) {
            index_1.shi.play();
        }
        expect(index_1.shi.isHungry).toBe(false);
    });
    test('【条件】しーちゃん、9回遊んだ後に空腹確認→【expected】「ハラヘリ」', () => {
        for (let i = 0; i < 9; i++) {
            index_1.shi.play();
        }
        expect(index_1.shi.isHungry).toBe(true);
    });
    test('【条件】しーちゃん、10回遊んだ後に空腹確認→【expected】暴れる', () => {
        for (let i = 0; i < 10; i++) {
            index_1.shi.play();
        }
        expect(index_1.shi.isBerserk).toBe(true);
    });
    test('【条件】キャンちゃん、2回遊んだ後に空腹確認→【expected】「まだ大丈夫」', () => {
        for (let i = 0; i < 2; i++) {
            index_1.kyan.play();
        }
        expect(index_1.kyan.isHungry).toBe(false);
    });
    test('【条件】キャンちゃん、3回遊んだ後に空腹確認→【expected】「まだ大丈夫」', () => {
        for (let i = 0; i < 3; i++) {
            index_1.kyan.play();
        }
        expect(index_1.kyan.isHungry).toBe(true);
    });
    test('【【条件】キャンちゃん、5回遊んだ後に空腹確認→【expected】暴れる', () => {
        for (let i = 0; i < 5; i++) {
            index_1.kyan.play();
        }
        expect(index_1.kyan.isBerserk).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map