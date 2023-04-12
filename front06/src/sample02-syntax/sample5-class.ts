export const classSample = () => {
  console.clear();
  console.log('classサンプル');

  // typescript特有1. 型定義はどこでも書け、スコープに従う
  class Vector2 {
    public static sum(p1: Vector2, p2: Vector2) {
      return new Vector2(p1.x + p2.x, p1.y + p2.y);
    }

    public get length(): number { return Math.sqrt((this.x ** 2) + (this.y ** 2)); }

    constructor(
      public readonly x: number = 0, // typescript特有2. パラメータプロパティ記法。アクセス修飾子をつけたコンストラクタ引数はプロパティ宣言を兼ねる
      public readonly y: number = 0) {
    }

    public sum(v: Vector2): Vector2;
    public sum(x: number, y: number): Vector2;
    public sum(v: Vector2 | number = 0, y: number = 0): Vector2 {
      if (v instanceof Vector2) {
        return new Vector2(this.x + v.x, this.y + v.y);
      } else {
        return new Vector2(this.x + v, this.y + y);
      }
    }
  }

  class GameObject {
    constructor(
      public readonly name: string,
      public position: Vector2,
      public velocity: Vector2 = new Vector2(),
      public acceleration: Vector2 = new Vector2(),
      public graphicPath: string | undefined = undefined) {
    }

    public move() {
      this.velocity = this.velocity.sum(this.acceleration);
      this.position = this.position.sum(this.velocity);
      console.log("this is moved");
    }
    public draw() {
      console.log(this.name);
      console.log(`  pos:${this.position.x},${this.position.y}`);
      console.log(`  vel:${this.velocity.x},${this.velocity.y}`);
      console.log(`  acc:${this.acceleration.x},${this.acceleration.y}`);
      console.log(`  graphicPath:${this.graphicPath}`);
    }
  }

  class Bullet extends GameObject {
    constructor(name: string,
      position: Vector2,
      velocity: Vector2 = new Vector2(),
      acceleration: Vector2 = new Vector2(),
      graphicPath: string | undefined = undefined,
      public hp: number = 1,
      public attackPower: number = 1,
      public radius: number = 1) {
      super(name, position, velocity, acceleration, graphicPath);
    }

    public override draw() {
      super.draw();
      console.log(`  hp:${this.hp}`);
      console.log(`  attackPower:${this.attackPower}`);
      console.log(`  radius:${this.radius}`);
    }
  }

  class GameObjectLike {
    public name: string = '';
    public position: Vector2 = new Vector2();
    public velocity: Vector2 = new Vector2();
    public acceleration: Vector2 = new Vector2();
    public graphicPath: string | undefined = undefined;

    public draw() {
      console.log(`FOOOO! ${this.name}, ${this.position.x},${this.position.y}`);
    }
  }

  const bullet1: GameObject = new Bullet(
    "smallBullet",
    new Vector2(10, 20),
    new Vector2(1, 3),
    new Vector2(0.01, 0.02),
    "file-to-path");

  bullet1.draw();
  bullet1.move();
  bullet1.draw();

  let likeVar: GameObjectLike | undefined = undefined;
  likeVar = bullet1; // typescript特有3. 構造的な比較（「継承」はなく「形状」）
  likeVar.draw(); // 基本クラスに代入された派生クラスのインスタンスと同じ挙動

  likeVar = new GameObjectLike();
  likeVar.name = 'GameObjectLike!';
  likeVar.draw();
};
// let obj = new Vector2(); // 見つからない