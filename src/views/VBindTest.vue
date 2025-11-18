<template>
  <div
    class="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-12"
  >
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="text-5xl font-bold mb-2 text-gray-800">🎨 v-bind 테스트</h1>
      <p class="text-gray-600 mb-12">
        Vue3의 v-bind를 이용한 다양한 속성 바인딩 테스트
      </p>

      <!-- 기본 속성 바인딩 -->
      <div
        class="bg-white rounded-lg shadow-xl border-t-4 border-purple-500 p-8 mb-8"
      >
        <h2 class="text-3xl font-bold text-purple-700 mb-6">
          1️⃣ 기본 속성 바인딩
        </h2>

        <div class="space-y-6">
          <!-- ID 바인딩 -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="block text-sm font-semibold text-gray-700 mb-2"
              >ID 바인딩:</label
            >
            <input
              v-model="elementId"
              type="text"
              placeholder="ID 입력"
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 mb-3"
            />
            <div
              :id="elementId"
              class="bg-purple-100 text-purple-700 p-4 rounded-lg font-mono"
            >
              현재 ID: {{ elementId }}
            </div>
          </div>

          <!-- Class 바인딩 (객체) -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="block text-sm font-semibold text-gray-700 mb-2"
              >Class 바인딩 (객체):</label
            >
            <div class="flex gap-4 mb-3">
              <label>
                <input type="checkbox" v-model="isActive" class="mr-2" />
                Active
              </label>
              <label>
                <input type="checkbox" v-model="isDisabled" class="mr-2" />
                Disabled
              </label>
            </div>
            <div
              :class="{
                'bg-green-100 text-green-700': isActive,
                'bg-red-100 text-red-700': isDisabled,
                'opacity-50': isDisabled,
              }"
              class="p-4 rounded-lg font-semibold transition-all"
            >
              Active: {{ isActive }} | Disabled: {{ isDisabled }}
            </div>
          </div>

          <!-- Class 바인딩 (배열) -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="block text-sm font-semibold text-gray-700 mb-2"
              >Class 바인딩 (배열):</label
            >
            <select
              v-model="selectedTheme"
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 mb-3"
            >
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
            </select>
            <div
              :class="[baseClass, themeClass]"
              class="p-4 rounded-lg text-white font-bold text-center"
            >
              Current Theme: {{ selectedTheme }}
            </div>
          </div>
        </div>
      </div>

      <!-- 스타일 바인딩 -->
      <div
        class="bg-white rounded-lg shadow-xl border-t-4 border-blue-500 p-8 mb-8"
      >
        <h2 class="text-3xl font-bold text-blue-700 mb-6">2️⃣ 스타일 바인딩</h2>

        <div class="space-y-6">
          <!-- 인라인 스타일 (객체) -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="block text-sm font-semibold text-gray-700 mb-2"
              >인라인 스타일 (객체):</label
            >
            <div class="flex gap-4 mb-3">
              <div>
                <label class="block text-sm mb-1">크기 (px):</label>
                <input
                  v-model.number="boxSize"
                  type="range"
                  min="50"
                  max="200"
                  class="w-32"
                />
                <span class="text-sm text-gray-600">{{ boxSize }}px</span>
              </div>
              <div>
                <label class="block text-sm mb-1">색상:</label>
                <input
                  v-model="boxColor"
                  type="color"
                  class="w-16 h-10 cursor-pointer rounded"
                />
              </div>
            </div>
            <div
              :style="{
                width: boxSize + 'px',
                height: boxSize + 'px',
                backgroundColor: boxColor,
              }"
              class="rounded-lg shadow-lg transition-all"
            ></div>
          </div>

          <!-- 동적 CSS 변수 -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="block text-sm font-semibold text-gray-700 mb-2"
              >동적 CSS 변수:</label
            >
            <div class="flex gap-4 mb-3">
              <div>
                <label class="block text-sm mb-1">투명도:</label>
                <input
                  v-model.number="opacity"
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  class="w-32"
                />
                <span class="text-sm text-gray-600"
                  >{{ (opacity * 100).toFixed(0) }}%</span
                >
              </div>
              <div>
                <label class="block text-sm mb-1">회전 (deg):</label>
                <input
                  v-model.number="rotation"
                  type="range"
                  min="0"
                  max="360"
                  class="w-32"
                />
                <span class="text-sm text-gray-600">{{ rotation }}°</span>
              </div>
            </div>
            <div
              :style="{
                '--opacity': opacity,
                '--rotation': rotation + 'deg',
              }"
              class="h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg transition-all"
              style="
                opacity: var(--opacity);
                transform: rotate(var(--rotation));
              "
            ></div>
          </div>
        </div>
      </div>

      <!-- 속성 바인딩 (Attributes) -->
      <div
        class="bg-white rounded-lg shadow-xl border-t-4 border-green-500 p-8 mb-8"
      >
        <h2 class="text-3xl font-bold text-green-700 mb-6">
          3️⃣ 속성 바인딩 (Attributes)
        </h2>

        <div class="space-y-6">
          <!-- src 바인딩 -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="block text-sm font-semibold text-gray-700 mb-2"
              >이미지 src 바인딩:</label
            >
            <input
              v-model="imageUrl"
              type="text"
              placeholder="이미지 URL 입력"
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 mb-3"
            />
            <img
              v-if="imageUrl"
              :src="imageUrl"
              alt="Bound image"
              class="h-32 rounded-lg shadow-lg object-cover"
            />
            <p v-else class="text-gray-500 italic">이미지 URL을 입력하세요</p>
          </div>

          <!-- href 바인딩 -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="block text-sm font-semibold text-gray-700 mb-2"
              >링크 href 바인딩:</label
            >
            <input
              v-model="linkUrl"
              type="text"
              placeholder="URL 입력 (예: https://example.com)"
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 mb-3"
            />
            <a
              :href="linkUrl"
              target="_blank"
              class="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all"
            >
              링크 방문 ({{ linkUrl || "URL 입력 필요" }})
            </a>
          </div>

          <!-- data 속성 바인딩 -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="block text-sm font-semibold text-gray-700 mb-2"
              >data 속성 바인딩:</label
            >
            <input
              v-model="dataValue"
              type="text"
              placeholder="데이터 입력"
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 mb-3"
            />
            <div
              :data-value="dataValue"
              class="bg-white p-4 rounded-lg border-2 border-green-300 font-mono text-sm"
            >
              data-value: {{ dataValue }}
            </div>
          </div>
        </div>
      </div>

      <!-- 이벤트 속성 바인딩 -->
      <div class="bg-white rounded-lg shadow-xl border-t-4 border-red-500 p-8">
        <h2 class="text-3xl font-bold text-red-700 mb-6">
          4️⃣ 이벤트 & 동적 속성
        </h2>

        <div class="space-y-6">
          <!-- 버튼 disabled 상태 -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="block text-sm font-semibold text-gray-700 mb-2"
              >버튼 disabled 바인딩:</label
            >
            <label class="flex items-center gap-2 mb-3">
              <input type="checkbox" v-model="buttonDisabled" />
              <span>버튼 비활성화</span>
            </label>
            <button
              :disabled="buttonDisabled"
              class="px-6 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all"
            >
              {{ buttonDisabled ? "비활성화됨" : "활성화됨" }}
            </button>
          </div>

          <!-- 입력 필드 readonly -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="block text-sm font-semibold text-gray-700 mb-2"
              >입력 필드 readonly 바인딩:</label
            >
            <label class="flex items-center gap-2 mb-3">
              <input type="checkbox" v-model="inputReadonly" />
              <span>읽기 전용</span>
            </label>
            <input
              :readonly="inputReadonly"
              v-model="inputValue"
              type="text"
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg read-only:bg-gray-100 read-only:cursor-not-allowed"
            />
          </div>

          <!-- 여러 속성 한번에 바인딩 -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <label class="block text-sm font-semibold text-gray-700 mb-2"
              >여러 속성 바인딩 (v-bind 객체):</label
            >
            <div class="space-y-2 mb-3">
              <label class="block text-sm">
                <input
                  type="text"
                  v-model="dynamicAttrs.title"
                  placeholder="title 입력"
                  class="w-full px-3 py-1 border-2 border-gray-300 rounded"
                />
              </label>
              <label class="block text-sm">
                <input
                  type="text"
                  v-model="dynamicAttrs.placeholder"
                  placeholder="placeholder 입력"
                  class="w-full px-3 py-1 border-2 border-gray-300 rounded"
                />
              </label>
            </div>
            <div class="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <p>Target:</p>
              <input
                v-bind="dynamicAttrs"
                type="text"
                class="w-full px-4 py-2 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-500"
              />
              <p>Description:</p>
              <p class="text-xs text-gray-600 mt-2 font-mono">
                title="{{ dynamicAttrs.title }}" placeholder="{{
                  dynamicAttrs.placeholder
                }}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// 기본 속성 바인딩
const elementId = ref("test-element");
const isActive = ref(true);
const isDisabled = ref(false);
const selectedTheme = ref("blue");

// 스타일 바인딩
const boxSize = ref(100);
const boxColor = ref("#6366f1");
const opacity = ref(1);
const rotation = ref(0);

// 속성 바인딩
const imageUrl = ref(
  "https://unsplash.com/photos/CS3WuMvmGfE/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYzNDIzOTM3fA&force=true&w=640"
);
const linkUrl = ref("https://example.com");
const dataValue = ref("sample-data");

// 이벤트 & 동적 속성
const buttonDisabled = ref(false);
const inputReadonly = ref(false);
const inputValue = ref("읽기 전용 테스트 텍스트");

// 여러 속성 바인딩
const dynamicAttrs = ref({
  title: "Vue 3 v-bind 테스트",
  placeholder: "여러 속성을 한번에 바인딩할 수 있습니다",
});

// 테마 클래스 계산
const baseClass = ref("p-4 rounded-lg text-center font-bold transition-all");
const themeClass = computed(() => {
  const themes: Record<string, string> = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  };
  return themes[selectedTheme.value] || "bg-gray-500";
});
</script>

<style scoped>
/* CSS 변수 기본값 */
:root {
  --opacity: 1;
  --rotation: 0deg;
}
</style>
