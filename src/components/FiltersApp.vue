<script setup lang="ts">
import { Filter } from '@/types/Filters'
import { PropType } from 'vue'

interface State {
  filters: Filter[]
}

const emits = defineEmits<{
  (e: 'set-filter', filter: Filter): void
}>()

const filters = ['All', 'Active', 'Done']

const props = defineProps({
  activeFilter: {
    type: String as PropType<Filter>,
    required: true,
  },
})

const setFilter = (filter: Filter) => {
  emits('set-filter', filter)
}
</script>

<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        v-for="filter in filters"
        :key="filter"
        class="button"
        :class="{ 'button--primary': props.activeFilter === filter }"
        @click="setFilter(filter)"
      >
        {{ filter }}
      </button>
    </section>
  </aside>
</template>
