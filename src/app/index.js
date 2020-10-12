"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kyan = exports.shi = exports.owner = exports.Cat = exports.CatOwner = void 0;
const MINIMUM_HUNGER = 0;
// CatOwner
class CatOwner {
    checkHunger(cat) {
        // HPを確認する
        cat.meow();
    }
    feed(snack, cat) {
        // おやつかシーチキン
        if (snack === 'oyatsu') {
            cat.eat('oyatsu');
        }
        else if (snack === 'tuna') {
            cat.eat('tuna');
        }
        else
            return;
    }
}
exports.CatOwner = CatOwner;
class Cat {
    constructor(name, hungerPoint, hungerCoefficient) {
        this.name = name;
        this.hungerPoint = MINIMUM_HUNGER;
        this.hungerCoefficient = hungerCoefficient;
    }
    get isHungry() {
        return this.hungerPoint >= 60;
    }
    get isBerserk() {
        // HP >= 100 ? 何をしようとしても暴れる
        return this.hungerPoint >= 100;
    }
    meow() {
        this.isHungry ? console.log('腹減ったニャン') : console.log('おやついらん');
    }
    eat(snack) {
        // isBerserk ? 食べない
        if (this.isBerserk)
            return console.log('!#$%^*#^^&$%^$)&*%^%$@#');
        // おやつ HP回復
        const snackHP = 40;
        // おやつ　HP <= snackHP
        if (snack === 'oyatsu' && this.hungerPoint <= snackHP) {
            return (this.hungerPoint = 0);
        }
        // おやつ　HP > snackHP
        if (snack === 'oyatsu') {
            return (this.hungerPoint -= snackHP);
        }
        // シーチキン HP = 0
        else if (snack === 'tuna') {
            return (this.hungerPoint = 0);
        }
        else
            return;
    }
    play() {
        // isBerserk ? 遊ばない
        if (this.isBerserk)
            return console.log('!#$%^*#^^&$%^$)&*%^%$@#');
        return (this.hungerPoint += 10 * this.hungerCoefficient);
    }
}
exports.Cat = Cat;
// CatOwner
exports.owner = new CatOwner();
// 猫２匹 ・1. しーちゃん、  2.キャンちゃん
exports.shi = new Cat('Shi', 0, 1);
exports.kyan = new Cat('Kyan', 0, 2);
//# sourceMappingURL=index.js.map