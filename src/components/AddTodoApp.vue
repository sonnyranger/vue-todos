<script setup lang="ts">
import { ref } from 'vue'
import { Todo } from '@/types/Todo'
interface State {
  isFormVisible: boolean
}
const emits = defineEmits<{
  (e: 'addTodo', todo: Todo): void
}>()

const isFormVisible = ref<State['isFormVisible']>(false)

const todoText = ref<string>('')

const addTodo = () => {
  emits('addTodo', {
    id: Date.now(),
    text: todoText.value,
    done: false,
  })
  todoText.value = ''
}
</script>

<template>
  <section class="add-todo">
    <form v-if="isFormVisible" class="add-todo__form" @submit.prevent="addTodo">
      <span class="add-todo__form-title">What is to be done?</span>
      <button @click="isFormVisible = false" class="close-button" type="button">
        <i class="bi bi-x" />
      </button>
      <div class="text-input text-input--focus">
        <input v-model="todoText" class="input" />
      </div>
      <button class="button button--filled">Add task</button>
    </form>
    <button
      v-else
      class="add-todo__show-form-button"
      @click="isFormVisible = true"
    >
      <i class="bi bi-plus-lg" />
    </button>
  </section>
</template>
