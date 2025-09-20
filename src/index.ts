interface RectangleResult {
  chuVi: number;
  dienTich: number;
}

function tinhHinhChuNhat(chieuDai: number, chieuRong: number): RectangleResult {
  const chuVi = (chieuDai + chieuRong) * 2;
  
  const dienTich = chieuDai * chieuRong;
  
  return {
    chuVi,
    dienTich
  };
}

const chieuDai = 10;
const chieuRong = 5;

const ketQua = tinhHinhChuNhat(chieuDai, chieuRong);

console.log(`Hình chữ nhật có chiều dài ${chieuDai} và chiều rộng ${chieuRong}:`);
console.log(`Chu vi: ${ketQua.chuVi}`);
console.log(`Diện tích: ${ketQua.dienTich}`);



