<template>
  <v-sheet class="position-relative" min-height="450">
    <div
      class="position-absolute d-flex align-center justify-center w-100 h-100"
    >
      <v-btn
        size="x-large"
        color="deep-purple-darken-2"
        @click="dialog = !dialog"
      >
        Open Dialog
      </v-btn>
    </div>

    <v-fade-transition hide-on-leave>
      <v-card
        v-if="dialog"
        append-icon="$close"
        class="mx-auto"
        elevation="16"
        max-width="500"
        title="Send a receipt"
      >
        <template v-slot:append>
          <v-btn icon="$close" variant="text" @click="dialog = false"></v-btn>
        </template>

        <v-divider></v-divider>

        <div class="py-12 text-center">
          <v-icon
            class="mb-6"
            color="success"
            :icon="mdiCheckCircleOutline"
            size="128"
          ></v-icon>

          <div class="text-h4 font-weight-bold">This receipt was sent</div>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            rounded
            variant="outlined"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </div>
      </v-card>
    </v-fade-transition>
  </v-sheet>
  <div class="my-20">
    <h3>Translations Composition API</h3>
    <p><b>$t():</b> {{ $t("hello") }}</p>
    <p><b>t():</b> {{ t("hello") }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { mdiCheckCircleOutline } from "@mdi/js";
import { useI18n } from "vue-i18n";

const { t } = useI18n(); // use as global scope

const dialog = ref(true);
</script>
