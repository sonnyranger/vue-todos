<script setup lang="ts">
import { Todo } from '@/types/Todo'
import { PropType } from 'vue'

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
})

const emits = defineEmits<{
  (e: 'toggleTodo', id: number): void
  (e: 'removeTodo', id: number): void
}>()

const toggleTodo = () => {
  emits('toggleTodo', props.todo.id)
}
const removeTodo = () => {
  emits('removeTodo', props.todo.id)
}
</script>

<template>
  <li
    @click="toggleTodo"
    class="todo-item"
    :class="{ 'todo-item--done': props.todo.done }"
  >
    <div class="todo-item__status">
      <i class="bi bi-check2" />
    </div>
    <span class="todo-item__text">{{ props.todo.text }}</span>
    <button @click.stop="removeTodo" class="todo-item__remove-button">
      <i class="bi bi-trash3" />
    </button>
  </li>
</template>
