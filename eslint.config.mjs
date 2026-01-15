import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Tạo instance compat để dùng lại các config cũ của Next.js
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Kế thừa config của Next.js (Core Vitals + TypeScript)
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 2. Kế thừa config Prettier (để tắt các rule ESLint xung đột)
  // Lưu ý: Phải đặt ở cuối cùng để ghi đè rule của Next.js
  ...compat.extends("prettier"),

  // 3. Custom rules hoặc ignores (nếu cần)
  {
    // Cấu hình này áp dụng toàn cục (tương đương globalIgnores cũ)
    ignores: [
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
        "node_modules/**"
    ],
  },
  {
    // Ví dụ: Muốn thêm rule riêng
    rules: {
      "no-console": "warn", 
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "always",
          semi: false,
          trailingComma: "none",
          tabWidth: 2,
          endOfLine: "auto",
          useTabs: false,
          printWidth: 120,
          jsxSingleQuote: true
        }
      ]
    }
  }
];

export default eslintConfig;