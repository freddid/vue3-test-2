<script setup>
const props = defineProps({
  user: Object,
  i: Number,
});
</script>

<template>
  <tr>
    <td>{{ i + 1 }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.first_name }}</td>
    <td>{{ user.pay_status }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.username }}</td>
    <td>
      <a :href="user.profile_link">{{ user.profile_link }}</a>
    </td>
  </tr>
</template>
