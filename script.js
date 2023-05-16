/**
 * nạp number và string vào interface Person tương ứng cho T, D.
 * T extends Person<number, string> tức nghĩa T được định nghĩa kiểu dữ liệu
 * là Person với id là number và name là string.
 * printName là một hàm hành động không trả về giá trị nên kiểu dữ liệu sẽ là void
 */
function printName(person) {
    console.log(person);
}
// chạy hàm, nạp vào object {id: 10, name: "an"}
// khớp với interface {id: number, name: string}
printName({
    id: 10,
    name: "an",
});
/**
 * nạp tham số person với interface IPerson tương đương với 1 object với
 * {id: number, name: string}
 */
function printNameBasic(person) {
    console.log(person);
}
// nạp object {id: 20, name: "Trang"} vào hàm
printNameBasic({
    id: 20,
    name: "Trang",
    isMale: false,
});
