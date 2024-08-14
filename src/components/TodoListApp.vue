<script setup lang="ts">
import { Todo } from '@/types/Todo'
import AddTodoItemApp from './AddTodoItemApp.vue'
import { PropType } from 'vue'

defineProps({
  todos: {
    type: Array as PropType<Todo[]>,
    required: true,
  },
})

const emits = defineEmits<{
  (e: 'toggleTodo', id: number): void
  (e: 'removeTodo', id: number): void
}>()

const toggleTodo = (id: number) => {
  emits('toggleTodo', id)
}
const removeTodo = (id: number) => {
  emits('removeTodo', id)
}
</script>

<template>
  <ul class="todo-list">
    <AddTodoItemApp
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggleTodo="toggleTodo"
      @removeTodo="removeTodo"
    />
  </ul>
</template>
