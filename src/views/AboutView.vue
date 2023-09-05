<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>This Section uses our vCustomDialog</h2>
    <p>
      Uses
      <a href="https://v2.vuejs.org/v2/guide/components-slots#Named-Slots"
        >new Syntax</a
      >
      for Slots and script setup
    </p>
    <v-btn color="primary" @click="isDialogOpen = true">
      Open Custom Dialog
    </v-btn>
    <vCustomDialog
      :size="dialogWidth"
      :hasButtons="true"
      v-model="isDialogOpen"
      @dialog-closed="closeDialog"
      :buttons="actionButtons"
    >
      <!-- slots syntax: #title or v-slot:title possible -->
      <template #title>
        <div class="text-h4 my-2 text-break">Example Dialog Title</div>
      </template>
      <template v-slot:content
        ><div class="d-flex flex-sm-row flex-column align-items-center">
          <p>Dialog Content</p>
        </div></template
      >
    </vCustomDialog>
  </div>
</template>

<script setup lang="ts">
import vCustomDialog from "@/components/vCustomDialog.vue";
import { ref } from "vue";

const dialogWidth = 426;
const isDialogOpen = ref<boolean>(false);
const closeDialog = () => {
  isDialogOpen.value = false;
};
const actionButtons = ["close"];
</script>
