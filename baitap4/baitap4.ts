
// PHẦN 1: QUẢN LÝ SẢN PHẨM
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

const products: Product[] = [
    { id: 1, name: "iPhone 15", price: 25000000, category: "Điện tử" },
    { id: 2, name: "Samsung Galaxy S24", price: 22000000, category: "Điện tử" },
    { id: 3, name: "Bánh mì", price: 15000, category: "Thực phẩm" },
    { id: 4, name: "Nước suối", price: 10000, category: "Thực phẩm" },
    { id: 5, name: "Áo thun", price: 200000, category: "Thời trang" },
    { id: 6, name: "Quần jean", price: 500000, category: "Thời trang" },
    { id: 7, name: "Laptop Dell", price: 18000000, category: "Điện tử" }
];

function filterByCategory(productList: Product[], category: string): Product[] {
    return productList.filter(product => product.category === category);
}

function calculateTotalPrice(productList: Product[]): number {
    return productList.reduce((total, product) => total + product.price, 0);
}

function findMinMax(productList: Product[]): { min: Product, max: Product } {
    if (productList.length === 0) {
        throw new Error("Danh sách sản phẩm không được rỗng");
    }
    const sortedByPrice = [...productList].sort((a, b) => a.price - b.price);
    return {
        min: sortedByPrice[0]!,
        max: sortedByPrice[sortedByPrice.length - 1]!
    };
}

// PHẦN 2: QUẢN LÝ PHƯƠNG TIỆN GIAO THÔNG
enum FuelType {
    GASOLINE = "Xăng",
    ELECTRIC = "Điện",
    DIESEL = "Dầu"
}

interface Vehicle {
    name: string;
    type: string;
    speed: number;
}

interface MotorizedVehicle extends Vehicle {
    fuelType: FuelType;
}

function calculateTravelTime(vehicle: Vehicle, distance: number): number {
    return distance / vehicle.speed;
}

const vehicles: MotorizedVehicle[] = [
    {
        name: "Honda Wave",
        type: "Xe máy",
        speed: 50,
        fuelType: FuelType.GASOLINE
    },
    {
        name: "Toyota Camry",
        type: "Ô tô",
        speed: 80,
        fuelType: FuelType.GASOLINE
    },
    {
        name: "Tesla Model 3",
        type: "Ô tô",
        speed: 100,
        fuelType: FuelType.ELECTRIC
    },
    {
        name: "VinFast VF8",
        type: "Ô tô",
        speed: 90,
        fuelType: FuelType.ELECTRIC
    },
    {
        name: "Yamaha Exciter",
        type: "Xe máy",
        speed: 60,
        fuelType: FuelType.GASOLINE
    }
];

// ==========================================
// DEMO VÀ CHẠY CHƯƠNG TRÌNH
// ==========================================

console.log("🚀 BÀI TẬP 4: QUẢN LÝ SẢN PHẨM VÀ PHƯƠNG TIỆN GIAO THÔNG");
console.log("=".repeat(60));

// Demo phần 1: Quản lý sản phẩm
console.log("\n📦 PHẦN 1: QUẢN LÝ SẢN PHẨM");
console.log("-".repeat(40));

console.log("\n=== DANH SÁCH SẢN PHẨM ===");
console.log(products);

console.log("\n=== SẢN PHẨM ĐIỆN TỬ ===");
const electronicProducts = filterByCategory(products, "Điện tử");
console.log(electronicProducts);

console.log("\n=== SẢN PHẨM THỰC PHẨM ===");
const foodProducts = filterByCategory(products, "Thực phẩm");
console.log(foodProducts);

console.log("\n=== TỔNG GIÁ TRỊ TẤT CẢ SẢN PHẨM ===");
const totalPrice = calculateTotalPrice(products);
console.log(`Tổng giá trị: ${totalPrice.toLocaleString()} VNĐ`);

console.log("\n=== SẢN PHẨM CÓ GIÁ THẤP NHẤT VÀ CAO NHẤT ===");
const minMax = findMinMax(products);
console.log(`Sản phẩm giá thấp nhất: ${minMax.min.name} - ${minMax.min.price.toLocaleString()} VNĐ`);
console.log(`Sản phẩm giá cao nhất: ${minMax.max.name} - ${minMax.max.price.toLocaleString()} VNĐ`);

// Demo phần 2: Quản lý phương tiện
console.log("\n PHẦN 2: QUẢN LÝ PHƯƠNG TIỆN GIAO THÔNG");
console.log("-".repeat(40));

console.log("\n=== DANH SÁCH PHƯƠNG TIỆN ===");
vehicles.forEach(vehicle => {
    console.log(`${vehicle.name} (${vehicle.type}) - ${vehicle.fuelType} - Tốc độ: ${vehicle.speed} km/h`);
});

const distance = 100; 
console.log(`\nTHỜI GIAN DI CHUYỂN ${distance} KM`);
vehicles.forEach(vehicle => {
    const travelTime = calculateTravelTime(vehicle, distance);
    console.log(`${vehicle.name}: ${travelTime.toFixed(2)} giờ (${Math.floor(travelTime)}h ${Math.round((travelTime % 1) * 60)}m)`);
});

const fastestVehicle = vehicles.reduce((fastest, current) => 
    current.speed > fastest.speed ? current : fastest
);

const slowestVehicle = vehicles.reduce((slowest, current) => 
    current.speed < slowest.speed ? current : slowest
);

console.log(`\nPHƯƠNG TIỆN NHANH NHẤT`);
console.log(`${fastestVehicle.name}: ${fastestVehicle.speed} km/h`);

console.log(`\nPHƯƠNG TIỆN CHẬM NHẤT `);
console.log(`${slowestVehicle.name}: ${slowestVehicle.speed} km/h`);

