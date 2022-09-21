<script setup>
import { useStore } from "vuex";
const { commit } = useStore();
</script>

<template>
  <div class="flex pb-10px justify-center">
    <input
      class="input-search"
      @input="commit('SEARCH_USERS', $event.target.value)"
      :value="modelValue"
      placeholder="Поиск валюты"
      type="text"
    />
  </div>
</template>

<style scoped>
.input-search {
  @apply border border-black/10 rounded-5px p-10px text-20px outline-none;
}
</style>
