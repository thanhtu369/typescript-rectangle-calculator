class Person {
  public name: string; ///đọc và ghi ở trong class và bên ngoài class
  protected gender: boolean; //chỉ đọc và ghi trong class và các class kế thừa
  private age: number; //chỉ đọc và ghi trong class
  public point?: number; //thuộc tính không bắt buộc

  constructor(name: string, age: number, gender: boolean, point?: number) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.point = point ?? 10; //nếu không truyền thì mặc định là 10
  }

  say(): string {
    return `Hello  ${this.name}`;
  }

  getAge(): number {
    return this.age;
  }
}

const p1 = new Person("thanh tu", 30, true);
console.log(p1.say());
console.log(p1.getAge());


//kế thừa :extends
class User extends Person {
  public role: string;
  constructor(
    name: string,
    age: number,
    gender: boolean,
    point: number | undefined, //tham số không bắt buộc
    role: string
  ) {
    super(name, age, gender, point); //gọi lại constructor của class cha
    this.role = role;
  }
}

const u1 = new User("thanh tu", 30, true, 10, "admin");
console.log(u1.say());
console.log(u1.getAge());
console.log(u1.point);
console.log(u1.role);
