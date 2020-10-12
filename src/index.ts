const MINIMUM_HUNGER = 0;

// CatOwner
export class CatOwner {
  public checkHunger(cat: ICat) {
    // check hungerPoint
    cat.meow();
  }

  public feed(snack: string, cat: Cat) {
    // おやつかシーチキン
    if (snack === 'oyatsu') {
      cat.eat('oyatsu');
    } else if (snack === 'tuna') {
      cat.eat('tuna');
    } else return;
  }
}

// 猫
interface ICat {
  name: string;
  hungerPoint: number;
  hungerCoefficient: number;
  isHungry: boolean;
  isBerserk: boolean;
  eat(snack: string): void;
  meow(): void;
  play(): void;
}

export class Cat implements ICat {
  public name: string;
  public hungerPoint: number; // 略称 HP
  public hungerCoefficient: number;

  constructor(name: string, hungerPoint: number, hungerCoefficient: number) {
    this.name = name;
    this.hungerPoint = MINIMUM_HUNGER;
    this.hungerCoefficient = hungerCoefficient;
  }

  get isHungry(): boolean {
    return this.hungerPoint >= 60;
  }

  get isBerserk(): boolean {
    // HP >= 100 ? 何をしようとしても暴れる
    return this.hungerPoint >= 100;
  }

  public meow() {
    this.isHungry ? console.log('腹減ったニャン') : console.log('おやついらん');
  }

  public eat(snack: string) {
    // isBerserk ? 食べない
    if (this.isBerserk) return console.log('!#$%^*#^^&$%^$)&*%^%$@#');

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
    } else return;
  }

  public play() {
    // isBerserk ? 遊ばない
    if (this.isBerserk) return console.log('!#$%^*#^^&$%^$)&*%^%$@#');

    return (this.hungerPoint += 10 * this.hungerCoefficient);
  }
}

// CatOwner
export const owner: CatOwner = new CatOwner();

// 猫２匹 ・1. しーちゃん、  2.キャンちゃん
export const shi: ICat = new Cat('Shi', 0, 1);
export const kyan: ICat = new Cat('Kyan', 0, 2);