<template>
  <div :class="$style.modalBackground">
    <div :class="$style.loadingModal">
      <Lottie
        :options="options_Loading"
        :height="200"
        :width="200"
        aria-hidden="true"
      />
      <strong>Loding ...</strong>
    </div>
  </div>
</template>

<script>
import loading from "@/assets/lottie/loading.json";

export default {
  name: "TheLoadingModal",
  data() {
    return {
      options_Loading: { animationData: loading },
    };
  },
};
</script>

<style module>
.modalBackground {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  opacity: 1;
  z-index: var(--modal-z);
}

.loadingModal {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background: rgba(0, 0, 0, 0.65);
  color: var(--color-white);
  transform: translate(-25%, -25%) scale(1);
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
  animation: scaleUp 0.3s;
}

.loadingModal strong {
  position: absolute;
  bottom: 13px;
  left: 43%;
  font-size: 1.2rem;
  font-weight: 500;
}

@keyframes scaleUp {
  0% {
    transform: translate(-25%, -25%) scale(0.8);
  }
  100% {
    transform: translate(-25%, -25%) scale(1);
  }
}
</style>
