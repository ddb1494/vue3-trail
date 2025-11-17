# Vue3 개발 체험 프로젝트

## Overview

이 프로젝트는 Vue3의 기본 개념을 익히고, TypeScript와 Vite를 사용하여 실제 애플리케이션을 개발하는 데 도움을 주기 위해 만들어졌습니다. 이 템플릿은 Vue 3의 `<script setup>` SFC를 사용하며, [script setup 문서](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)를 참조하여 더 많은 정보를 얻을 수 있습니다.

추천하는 프로젝트 설정 및 IDE 지원에 대한 자세한 내용은 [Vue Docs TypeScript 가이드](https://vuejs.org/guide/typescript/overview.html#project-setup)를 확인하세요.

## Getting Started

### Installation

vue3-trail 폴더를 생성하고 터미널에서 다음 명령어를 실행합니다:

```bash
cd vue3-trail
npm create vite@latest . -- --template vue-ts
```

### Add Router and State Management

프로젝트 디렉토리에서 Vue Router와 Pinia를 설치합니다:

```bash
npm install vue-router@4 pinia
```

**상태 관리:**

- **Pinia count**: 모든 페이지에서 일관성 유지
- **Local count**: 페이지마다 독립적인 상태, 라우터 이동 시 초기화
