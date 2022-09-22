<script setup>
import { useStore } from "vuex";
import UserInfo from "./UserInfo.vue";
import FormAddUser from "./FormAddUser.vue";
const { state, commit } = useStore();

// заголовки столбцов
const headerTable = [
  ["№", "№"],
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
      <UserInfo
        :i="i"
        :user="user"
        v-for="(user, i) in state.usersData"
        :key="user.id"
      />
      <FormAddUser />
    </tbody>
  </table>
</template>

<style>
table td,
table th {
  @apply border-b border-slate-400/40 py-12px px-8px font-medium text-left text-14px max-w-200px break-words;
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
