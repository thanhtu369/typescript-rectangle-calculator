"use strict";
// Hàm tính chu vi và diện tích hình chữ nhật
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm tính chu vi và diện tích hình chữ nhật
function tinhHinhChuNhat(chieuDai, chieuRong) {
    // Tính chu vi: (chiều dài + chiều rộng) × 2
    const chuVi = (chieuDai + chieuRong) * 2;
    // Tính diện tích: chiều dài × chiều rộng
    const dienTich = chieuDai * chieuRong;
    return {
        chuVi,
        dienTich
    };
}
// Ví dụ sử dụng
const chieuDai = 10;
const chieuRong = 5;
const ketQua = tinhHinhChuNhat(chieuDai, chieuRong);
console.log(`Hình chữ nhật có chiều dài ${chieuDai} và chiều rộng ${chieuRong}:`);
console.log(`Chu vi: ${ketQua.chuVi}`);
console.log(`Diện tích: ${ketQua.dienTich}`);
// Không cần export vì đây là bài học đơn giản
//# sourceMappingURL=index.js.map