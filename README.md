# TypeScript Rectangle Calculator

Bài tập TypeScript buổi 2 - Tính chu vi và diện tích hình chữ nhật

## 📋 Mô tả

Chương trình TypeScript đơn giản để tính:
- **Chu vi** hình chữ nhật: `(chiều dài + chiều rộng) × 2`
- **Diện tích** hình chữ nhật: `chiều dài × chiều rộng`

## 🚀 Cách chạy

### Cách 1: Biên dịch rồi chạy
```bash
tsc                    # Biên dịch TypeScript → JavaScript
node dist/index.js     # Chạy file JavaScript
```

### Cách 2: Chạy trực tiếp TypeScript
```bash
npx ts-node src/index.ts
```

## 📁 Cấu trúc project

```
├── src/
│   └── index.ts       # Code TypeScript chính
├── dist/              # File JavaScript đã biên dịch
├── tsconfig.json      # Cấu hình TypeScript
└── package.json       # Dependencies
```

## 📊 Kết quả

```
Hình chữ nhật có chiều dài 10 và chiều rộng 5:
Chu vi: 30
Diện tích: 50
```

## 🛠 Công nghệ sử dụng

- TypeScript
- Node.js
- ts-node (để chạy trực tiếp TS)
