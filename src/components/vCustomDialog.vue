<template>
  <v-dialog
    ref="vDialog"
    :max-width="size"
    @click:outside="$emit('dialog-closed', false)"
    @keydown.esc="$emit('dialog-closed', false)"
  >
    <v-card :ripple="false">
      <v-card-title data-testid="dialog-title">
        <slot name="title"></slot>
      </v-card-title>
      <v-card-text class="text--primary">
        <slot name="content"></slot>
      </v-card-text>
      <v-card-actions v-if="hasButtons">
        <v-spacer></v-spacer>

        <div class="button-section button-left"></div>
        <div class="button-section button-right">
          <v-btn
            v-if="checkButtons('close')"
            data-testId="dialog-close"
            variant="outlined"
            @click="closeDialog"
          >
            Close
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
  isOpen: Boolean,
  size: Number,
  hasButtons: Boolean,
  confirmBtnTitleKey: String,
  confirmBtnDisabled: Boolean,
  nextBtnTitleKey: String,
  nextBtnDisabled: Boolean,
  buttons: Array,
});
const emit = defineEmits(["dialog-closed"]);

const checkButtons = (buttonName: string): boolean => {
  return !!props.buttons?.some((button) => button == buttonName);
};

const closeDialog = (): void => {
  emit("dialog-closed");
};
</script>

<style lang="scss" scoped>
.button-left {
  width: 25%;
  text-align: left;
}

.button-right {
  display: inline-block;
  width: 75%;
  text-align: right;
}
.button-section {
  margin-bottom: calc(var(--space-base-vuetify) * 2);
}

.button-section > button {
  margin-left: calc(var(--space-base-vuetify) * 2);
}
</style>
