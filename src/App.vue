<script lang="ts" setup>
import HeaderApp from './components/HeaderApp.vue'
import FiltersApp from './components/FiltersApp.vue'
import TodoListApp from './components/TodoListApp.vue'
import AddTodoApp from './components/AddTodoApp.vue'
import FooterApp from './components/FooterApp.vue'
import { Todo } from '@/types/Todo'
import { computed, ref } from 'vue'
import { Filter } from './types/Filters'

interface State {
  todos: Todo[]
}

const todos = ref<State['todos']>([])
const activeFilter = ref<Filter>('All')

const toggleTodo = (id: number) => {
  const targetTodo = todos.value.find((todo: Todo) => todo.id === id)
  if (targetTodo) {
    targetTodo.done = !targetTodo.done
  }
}

const removeTodo = (id: number) => {
  todos.value = todos.value.filter((todo: Todo) => todo.id !== id)
}

const addTodo = (todo: Todo) => {
  if (todo.text) {
    todos.value.push(todo)
  }
}

const setFilter = (filter: Filter) => {
  activeFilter.value = filter
}

const filteredTodos = computed(() => {
  switch (activeFilter.value) {
    case 'Active': {
      return todos.value.filter((todo: Todo) => !todo.done)
    }
    case 'Done': {
      return todos.value.filter((todo: Todo) => todo.done)
    }
    default: {
      return todos.value
    }
  }
})

const stats = computed(() => {
  return {
    active: todos.value.filter((todo: Todo) => !todo.done).length,
    done: todos.value.filter((todo: Todo) => todo.done).length,
  }
})
</script>

<template>
  <div id="app">
    <HeaderApp />

    <FiltersApp :active-filter="activeFilter" @set-filter="setFilter" />

    <main class="app-main">
      <TodoListApp
        @toggleTodo="toggleTodo"
        @removeTodo="removeTodo"
        :todos="filteredTodos"
      />
      <AddTodoApp @addTodo="addTodo" />
    </main>

    <FooterApp :stats="stats" />
  </div>
</template>
