<template>
  <div :class="$style.modalBackground">
    <form :class="$style.modal" :style="{ width: width, minHeight: height }">
      <h3 :class="$style.modalTitle">
        <slot name="title"></slot>
      </h3>
      <div :class="$style.desc">
        <slot name="desc"></slot>
      </div>
      <div :class="$style.btnWrap">
        <slot name="btnWrap"></slot>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheModal",
  props: {
    width: {
      type: String,
      default: "500px",
    },
    height: {
      type: String,
      default: "300px",
    },
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
  background: rgba(0, 0, 0, 0.65);
  opacity: 1;
  animation: fadein 0.3s;
  z-index: var(--modal-z);
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: var(--color-white);
  transform: translate(-50%, -50%) scale(1);
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
  animation: scaleUp 0.3s;
}

.modalTitle {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  width: 100%;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: 1.1rem;
  font-weight: 600;
}

.desc {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
}

.btnWrap {
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 1rem;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes scaleUp {
  0% {
    transform: translate(-50%, -50%) scale(0.9);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
