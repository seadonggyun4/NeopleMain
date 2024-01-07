<template>
  <button
    :class="$style.detailBtn"
    :style="{ color: color, height: height, width: width, fontSize: fontSize }"
    :type="type"
    @click="$emit('onClick', $event)"
  >
    <slot></slot>
    <font-awesome-icon v-if="icon" :icon="['fas', icon]" aria-hidden="true" />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      default: "button",
    },
    color: {
      default: "white",
    },
    icon: String,
    width: {
      default: "250px",
    },
    height: {
      default: "40px",
    },
    fontSize: {
      default: "12px",
    },
  },
};
</script>

<style module>
.detailBtn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-radius: 20px;
  background-color: var(--color-primary);
  font-weight: bold;
  transition: opacity 0.3s ease-in-out;
}

.detailBtn svg {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.detailBtn:hover {
  opacity: 0.8;
}
</style>
