<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
const { commit } = useStore();

const newUserObj = ref({
  email: "",
  first_name: "",
  pay_status: false,
  last_name: "",
  username: "",
  profile_link: "",
});

// Влалидация и добавление нового пользователя
const submit = () => {
  if (newUserObj.value.email == "" || newUserObj.value.username == "")
    return alert("Пожалуйста ввдетие эл. почта и ник");

  commit("ADD_USER", newUserObj.value);
  for (const key in newUserObj.value) newUserObj.value[key] = "";
  newUserObj.value.pay_status = false;
};
</script>
<template>
  <tr>
    <td><button @click="submit">+</button></td>
    <td>
      <input v-model="newUserObj.email" placeholder="Эл. почта" type="text" />
    </td>
    <td>
      <input v-model="newUserObj.first_name" placeholder="Имя" type="text" />
    </td>
    <td class="flex items-center">
      <input
        v-model="newUserObj.pay_status"
        id="status"
        type="checkbox"
        class="mr-5px"
      />
      <label for="status"> Оплата </label>
    </td>
    <td>
      <input v-model="newUserObj.last_name" placeholder="Фамилия" type="text" />
    </td>
    <td>
      <input v-model="newUserObj.username" placeholder="Ник" type="text" />
    </td>
    <td>
      <input
        v-model="newUserObj.profile_link"
        placeholder="Сслыка на профиль"
        type="text"
      />
    </td>
  </tr>
</template>
<style scoped>
td {
  @apply p-0;
}

input {
  @apply h-30px border-2 border-black/40 my-5px px-10px;
}

button {
  @apply text-white py-5px px-10px rounded-5px font-bold mx-10px bg-dark-50 hover: opacity-80;
}
</style>
