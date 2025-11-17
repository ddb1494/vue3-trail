# Vue3 개발 체험 프로젝트

## Overview

이 프로젝트는 Vue3의 기본 개념을 익히고, TypeScript와 Vite를 사용하여 실제 애플리케이션을 개발하는 데 도움을 주기 위해 만들어졌습니다. 이 템플릿은 Vue 3의 `<script setup>` SFC를 사용하며, [script setup 문서](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)를 참조하여 더 많은 정보를 얻을 수 있습니다.

추천하는 프로젝트 설정 및 IDE 지원에 대한 자세한 내용은 [Vue Docs TypeScript 가이드](https://vuejs.org/guide/typescript/overview.html#project-setup)를 확인하세요.

## 2. 라우터 및 상태 관리 설정

### 2.1 Vue Router와 Pinia 설치

```bash
npm install vue-router@4 pinia
```

**상태 관리:**

- **Pinia count**: 모든 페이지에서 일관성 유지
- **Local count**: 페이지마다 독립적인 상태, 라우터 이동 시 초기화

### 2.2 라우터 페이지 생성

- `src/router/index.ts`: 라우터 설정
- `src/views/Home.vue`: 홈 페이지
- `src/views/About.vue`: About 페이지

## 3. 스타일링 - Tailwind CSS

### 3.1 Tailwind CSS 설치

```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
```

### 3.2 Tailwind 설정

- `tailwind.config.js`: Tailwind 설정 파일
- `postcss.config.js`: PostCSS 설정
- `src/style.css`: Tailwind import

## 4. 서버 상태 관리 - @tanstack/vue-query

### 4.1 설치

```bash
npm install @tanstack/vue-query axios
```

### 4.2 구성

- `src/services/api.ts`: API 함수 (GET, POST, DELETE)
- `src/views/ApiTest.vue`: API 테스트 페이지
- `main.ts`: Vue Query 플러그인 설정

### 4.3 API 테스트

**사용 API**: JSONPlaceholder (오픈 API)

- **GET**: `/api-test`에서 포스트 목록 조회
- **POST**: 새로운 포스트 생성
- **DELETE**: 포스트 삭제

## 프로젝트 구조

```
src/
├── components/
│   └── counters/
│       ├── PiniaCounter.vue
│       └── LocalCounter.vue
├── services/
│   └── api.ts
├── stores/
│   └── counter.ts
├── views/
│   ├── Home.vue
│   ├── About.vue
│   └── ApiTest.vue
├── router/
│   └── index.ts
├── App.vue
├── main.ts
└── style.css
```

## 개발 서버 실행

```bash
npm run dev
```

## 📚 학습 포인트

- ✅ Vue3 Composition API with `<script setup>`
- ✅ TypeScript 타입 정의
- ✅ Vue Router로 SPA 라우팅
- ✅ Pinia를 이용한 상태 관리 (클라이언트)
- ✅ Tailwind CSS로 스타일링
- ✅ @tanstack/vue-query로 서버 상태 관리
- ✅ Axios로 API 통신
