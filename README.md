# nextjs-template

[Next.js](https://nextjs.org/)를 활용한 template repository입니다.

## Getting Started

**modules 설치**

```bash
npm install
```

**실행**

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)으로 브라우저에서 실행됩니다.

**빌드**

```bash
npm run build
npm run start
```

## 구성

### nextjs

- [nextjs](https://nextjs.org/docs) v14.1.0
- app router 방식

### typescript

- [typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) v5

### tailwindcss

- [tailwindcss](https://tailwindcss.com/docs/installation) v3.3.0

### shadcn/ui

- [shadcn/ui](https://ui.shadcn.com/docs/installation/next) v0.8.0

### storybook

- [storybook](https://storybook.js.org/docs/get-started/install) v7.6.10

```bash
npm run storybook
```

### msw

- [msw](https://mswjs.io/docs/getting-started) v2.1.3

### react-query

- [react-query](https://tanstack.com/query/latest/docs/react/installation) v5.17.19

### zustand

- [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) v4.5.0

### vitest

- [vitest](https://vitest.dev/guide/) v1.2.1
- matcher: "jsdom v23.2.0"

```bash
npm test
```

### prettier

- [prettier](https://prettier.io/docs/en/) v3.2.4
- .prettierrc.json 설정 파일
- [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

### Dockerfile

- nextjs build

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### 마지막 업데이트 날짜

24.01.25
