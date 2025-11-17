<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="text-5xl font-bold mb-2 text-gray-800">🚀 API 테스트</h1>
      <p class="text-gray-600 mb-12">
        JSONPlaceholder를 사용한 GET, POST, DELETE 테스트
      </p>

      <!-- GET & DELETE 섹션 -->
      <div class="bg-white rounded-lg shadow-xl border-t-4 border-blue-500 p-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-3xl font-bold text-blue-700">📥 포스트 목록</h2>
          <div class="flex gap-4">
            <button
              @click="() => refetch()"
              :disabled="isLoading"
              class="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {{ isLoading ? "⏳ 로딩 중..." : "🔄 새로고침" }}
            </button>
            <button
              @click="isModalOpen = true"
              class="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>➕</span> 포스트 생성
            </button>
          </div>
        </div>

        <div
          v-if="isError"
          class="bg-red-100 text-red-700 p-4 rounded-lg mb-6 border border-red-300"
        >
          ❌ 에러: {{ error }}
        </div>

        <div v-if="data" class="space-y-3 max-h-[600px] overflow-y-auto pr-2">
          <div
            v-for="post in data"
            :key="post.id"
            class="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg shadow-md border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300 group"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-3 mb-2">
                  <span
                    class="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                  >
                    #{{ post.id }}
                  </span>
                  <h3 class="font-bold text-gray-800 truncate">
                    {{ post.title }}
                  </h3>
                </div>
                <p class="text-gray-600 text-sm line-clamp-2">
                  {{ post.body }}
                </p>
              </div>
              <button
                @click="handleDeletePost(post.id)"
                :disabled="isDeleting === post.id"
                class="flex-shrink-0 px-3 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-bold rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 text-sm whitespace-nowrap"
              >
                {{ isDeleting === post.id ? "⏳" : "🗑️" }}
              </button>
            </div>
          </div>
        </div>

        <div v-else-if="!isLoading" class="text-center py-12 text-gray-500">
          <p class="text-lg">포스트를 조회해주세요</p>
        </div>

        <!-- 토스트 메시지 -->
        <transition
          enter-active-class="transition ease-out duration-300"
          enter-from-class="translate-x-full opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="transition ease-in duration-300"
          leave-from-class="translate-x-0 opacity-100"
          leave-to-class="translate-x-full opacity-0"
        >
          <div
            v-if="deletedPostId"
            class="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-lg shadow-lg border-l-4 border-green-700 z-50 flex items-center gap-3"
          >
            <span class="text-xl">✅</span>
            <span class="font-semibold"
              >ID {{ deletedPostId }} 포스트가 삭제되었습니다!</span
            >
          </div>
        </transition>
      </div>
    </div>

    <!-- 모달 배경 -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        @click="isModalOpen = false"
      ></div>
    </transition>

    <!-- 모달 다이얼로그 -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          class="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 border-t-4 border-green-500"
        >
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-gray-800">📤 새 포스트 생성</h3>
            <button
              @click="isModalOpen = false"
              class="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ✕
            </button>
          </div>

          <form @submit.prevent="handleCreatePost" class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2"
                >제목</label
              >
              <input
                v-model="newPost.title"
                type="text"
                placeholder="포스트 제목을 입력하세요"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all bg-white text-gray-800 placeholder-gray-400"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2"
                >내용</label
              >
              <textarea
                v-model="newPost.body"
                placeholder="포스트 내용을 입력하세요"
                rows="5"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all bg-white text-gray-800 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <div class="flex gap-3 pt-4">
              <button
                type="button"
                @click="isModalOpen = false"
                class="flex-1 px-4 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg transition-all duration-300"
              >
                취소
              </button>
              <button
                type="submit"
                :disabled="isCreating || !newPost.title || !newPost.body"
                class="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold rounded-lg transition-all duration-300 disabled:cursor-not-allowed"
              >
                <span v-if="isCreating">⏳ 생성 중...</span>
                <span v-else>✅ 생성</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>

    <!-- 포스트 생성 성공 토스트 -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-full opacity-0"
    >
      <div
        v-if="createdPost"
        class="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-lg shadow-lg border-l-4 border-blue-700 z-50 flex items-center gap-3"
      >
        <span class="text-xl">✅</span>
        <div>
          <p class="font-semibold">포스트가 생성되었습니다!</p>
          <p class="font-semibold">가상 API 호출로 인해 ID 고정입니다.</p>
          <p class="text-sm text-blue-100">ID: {{ createdPost.id }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query";
import { getPosts, createPost, deletePost } from "../services/api";

const queryClient = useQueryClient();

// 모달 상태
const isModalOpen = ref(false);

// GET 쿼리
const { data, isLoading, isError, error, refetch } = useQuery({
  queryKey: ["posts"],
  queryFn: getPosts,
});

// POST 뮤테이션
const newPost = ref({ title: "", body: "", userId: 1 });
const createdPost = ref<any>(null);

const { mutate: createPostMutate, isPending: isCreating } = useMutation({
  mutationFn: createPost,
  onSuccess: (response) => {
    // Vue Query 캐시에 새 포스트 추가 (리스트 맨 뒤에)
    queryClient.setQueryData(["posts"], (oldData: any) => {
      if (!oldData) return [response];
      return [...oldData, response];
    });

    createdPost.value = response;
    newPost.value = { title: "", body: "", userId: 1 };
    // 모달 즉시 닫기
    isModalOpen.value = false;
    // 3초 후 토스트 메시지 제거
    setTimeout(() => {
      createdPost.value = null;
    }, 3000);
  },
});

const handleCreatePost = () => {
  createPostMutate(newPost.value);
};

// DELETE 뮤테이션
const deletedPostId = ref<number | null>(null);
const isDeleting = ref<number | null>(null);

const { mutate: deletePostMutate } = useMutation({
  mutationFn: deletePost,
  onSuccess: (_, deletedId) => {
    // Vue Query 캐시에서 해당 포스트 제거
    queryClient.setQueryData(["posts"], (oldData: any) => {
      if (!oldData) return oldData;
      return oldData.filter((post: any) => post.id !== deletedId);
    });

    deletedPostId.value = deletedId;
    isDeleting.value = null;
    // 3초 후 메시지 제거
    setTimeout(() => {
      deletedPostId.value = null;
    }, 3000);
  },
  onError: () => {
    isDeleting.value = null;
  },
});

const handleDeletePost = (id: number) => {
  isDeleting.value = id;
  deletePostMutate(id);
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce-in {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

.animate-bounce-in {
  animation: bounce-in 0.6s ease-out;
}
</style>
