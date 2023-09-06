<template>
  <v-dialog
    ref="vDialog"
    :max-width="size"
    @click:outside="emit('dialog-closed')"
    @keydown.esc="emit('dialog-closed')"
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

        <div class="button-section button-left">
          <v-btn
            v-if="checkButtons('back')"
            data-testId="dialog-back"
            variant="outlined"
            @click="emit('back')"
          >
            {{ t("Back") }}
          </v-btn>
        </div>
        <v-btn
          v-if="checkButtons('edit')"
          data-testId="dialog-edit"
          variant="flat"
          @click="emit('dialog-edit')"
        >
          {{ t("Edit") }}
        </v-btn>

        <div class="button-section button-right">
          <v-btn
            v-if="checkButtons('cancel')"
            data-testId="dialog-cancel"
            class="dialog-closed"
            variant="text"
            @click="cancelDialog"
          >
            {{ t("Cancel") }}
          </v-btn>
          <v-btn
            v-if="checkButtons('close')"
            data-testId="dialog-close"
            variant="outlined"
            @click="emit('dialog-closed')"
          >
            {{ t("Close") }}
          </v-btn>
          <v-btn
            v-if="checkButtons('confirm')"
            data-testId="dialog-confirm"
            class="dialog-confirmed px-6"
            color="primary"
            variant="flat"
            :disabled="confirmBtnDisabled"
            @click="confirmDialog"
            >{{ t(confirmBtnTitleKey) }}
          </v-btn>
          <v-btn
            v-if="checkButtons('next')"
            data-testId="dialog-next"
            color="primary"
            variant="flat"
            :disabled="nextBtnDisabled"
            @click="emit('next')"
            >{{ $t(nextBtnTitleKey) }}
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const props = defineProps({
  size: { type: Number, default: 480 },
  hasButtons: Boolean,
  confirmBtnTitleKey: { type: String, default: "Confirm" },
  confirmBtnDisabled: Boolean,
  nextBtnTitleKey: { type: String, default: "Continue" },
  nextBtnDisabled: Boolean,
  buttons: { type: Array, default: () => ["cancel", "confirm"] },
});
const emit = defineEmits([
  "dialog-closed",
  "dialog-canceled",
  "dialog-confirmed",
  "dialog-edit",
  "next",
  "back",
]);

const { t } = useI18n();

const checkButtons = (buttonName: string): boolean => {
  return props.buttons.some((button) => button == buttonName);
};

const cancelDialog = (): void => {
  emit("dialog-canceled");
  emit("dialog-closed");
};

const confirmDialog = (): void => {
  emit("dialog-confirmed");
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
