// thay vì khởi tạo generic type thì gán thẳng type cho từng thuộc tính luôn
// id: number và name là string
interface IPerson {
  id: number;
  name: string;
  isMale: boolean;
  // optional key
  isRich?: boolean;
}
/**
 * nạp tham số person với interface IPerson tương đương với 1 object với
 * {id: number, name: string}
 */
function printNameBasic(person: IPerson): void {
  console.log(person);
}

// nạp object {id: 20, name: "Trang"} vào hàm
printNameBasic({
  id: 20,
  name: "Trang",
  isMale: false,
});

// T, D là generic type
interface Person<T, D> {
  id: T;
  name: D;
}

/**
 * nạp number và string vào interface Person tương ứng cho T, D.
 * T extends Person<number, string> tức nghĩa T được định nghĩa kiểu dữ liệu
 * là Person với id là number và name là string.
 * printName là một hàm hành động không trả về giá trị nên kiểu dữ liệu sẽ là void
 */
function printName<T extends Person<number, string>>(person: T): void {
  console.log(person);
}

// chạy hàm, nạp vào object {id: 10, name: "an"}
// khớp với interface {id: number, name: string}
printName({
  id: 10,
  name: "an",
});

interface ClassRoom<T, D> {
  id: T;
  name: D;
}

// generic class:
class Student<T, U> {
  private id: T;
  private name: U;

  constructor(id: T, name: U) {
    this.id = id;
    this.name = name;
  }

  printInfo() {
    return `${this.id} -> ${this.name}`;
  }

  testMethod<T extends ClassRoom<string, string>>(classRoom: T) {
    return `${this.name} is in class ${classRoom.name}`;
  }
}

// khởi tạo instances từ class Student:
const student1 = new Student<number, string>(10, "Long");
const student2 = new Student<string, string>("abcx12", "Long");

console.log(student1.testMethod({ id: "K10", name: "ITK10" }));

console.log({ student1, student2 });
