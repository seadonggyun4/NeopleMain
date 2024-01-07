<template>
  <TheModal>
    <template #desc>
      <div :class="$style.flexWrap">
        <Lottie
          v-if="alertType !== ''"
          :options="lottieData[setLottie]"
          :height="100"
          :width="100"
          aria-hidden="true"
        />
        <slot name="alertText"></slot>
      </div>
    </template>
    <template #btnWrap>
      <TheButton @onClick="$emit('onClose', $event)">확인</TheButton>
    </template>
  </TheModal>
</template>

<script>
import deleteSuccess from "@/assets/lottie/deleteSuccess.json";
import success from "@/assets/lottie/modal_success.json";
import error from "@/assets/lottie/modal_error.json";
import { mapMutations } from "vuex";

export default {
  name: "TheAlertModal",
  data() {
    return {
      lottieData: {
        options_Delete: { animationData: deleteSuccess, loop: false },
        options_Success: { animationData: success, loop: false },
        options_Error: { animationData: error, loop: false },
      },
    };
  },
  props: {
    alertType: {
      type: String,
      default: "",
    },
  },
  computed: {
    // Lottie 데이터 세팅 분기처리
    setLottie() {
      switch (this.alertType) {
        case "error":
          return "options_Error";
        case "success":
          return "options_Success";
        case "delete":
          return "options_Delete";
      }
      return "";
    },
  },
  methods: {
    ...mapMutations(),
  },
};
</script>

<style module>
.flexWrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
}
</style>
