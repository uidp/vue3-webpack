<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <DialogTest></DialogTest>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import DialogTest from "@/components/DialogTest.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    DialogTest,
  },
});
</script>
