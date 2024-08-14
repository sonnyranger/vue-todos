<script setup lang="ts">
import { PropType } from 'vue'
interface Stats {
  active: number
  done: number
}

const props = defineProps({
  stats: {
    type: Object as PropType<Stats>,
    required: true,
  },
})
</script>

<template>
  <footer class="app-footer">
    {{ props.stats.active }} more to do, {{ props.stats.done }} done
  </footer>
</template>
