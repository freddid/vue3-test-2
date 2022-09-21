<script setup>
import { useStore } from "vuex";
import UserInfo from "./UserInfo.vue";
const { state, commit } = useStore();

// заголовки столбцов
const headerTable = [
  ["Эл. почта", "email"],
  ["Имя", "first_name"],
  ["Статус оплаты", "pay_status"],
  ["Фамилия", "last_name"],
  ["Ник", "username"],
  ["Сслыка на профиль", "profile_link"],
];
</script>

<template>
  <table class="w-full mt-30px">
    <tbody>
      <tr>
        <th
          :key="el"
          :class="{ 'text-indigo-500': state.currentSort == el[1] }"
          @click="commit('SORT_USERS', el[1])"
          v-for="el in headerTable"
        >
          {{ el[0] }} <span>⇕</span>
        </th>
      </tr>
      <UserInfo :user="user" v-for="user in state.usersData" :key="user.id" />
    </tbody>
  </table>
</template>

<style>
table td,
table th {
  @apply border-b border-slate-400/40 py-12px px-8px font-medium text-left text-14px;
}

table tr:hover {
  @apply bg-black/5;
}

table th {
  @apply cursor-pointer select-none hover:opacity-50;
}

table td {
  @apply font-normal;
}
</style>
