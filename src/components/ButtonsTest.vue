<template>
  <h3>Fab and dark Prop</h3>
  <p>
    The fab prop is removed in Vuetify 3, we should use the icon prop. The dark
    prop was also removed. We also don't need it because its overwritten by the
    color prop, This is the Button from the TopBar.vue:
  </p>
  <v-btn
    color="secondary darken-1"
    :icon="mdiArrowCollapse"
    variant="flat"
    width="40"
    height="40"
    class="fullscreen-button-active"
  ></v-btn>

  <h3>Button Disabled</h3>
  <p>
    Disabled buttons use a faded variant of the specified color (here the
    primary color) instead of grey in Vuetify 3. Depressed was renamed to
    variant="flat".
  </p>
  <v-btn color="primary" variant="flat" disabled>Disabled Button</v-btn>
</template>

<script setup lang="ts">
import { mdiArrowCollapse } from "@mdi/js";
</script>
