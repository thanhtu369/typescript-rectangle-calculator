// interface
interface Student {
  id: number;
  name: string;
  age: number;
  address: string;
  vneid: string;
} 
let student: Student = {
  id: 1,
  name: "Nguyen Van A",
    age: 20,    
    address: "Ha Noi",
    vneid: "VNE123456"
};


let anyStudent: any = {
  id: 2,
  name: "Tran Thi B",
}
// void : khong co return
// kieu du lieu : number, string, boolean,

function addNumber (): void {
  //return 1;
}