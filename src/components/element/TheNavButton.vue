<template>
  <button
    :class="$style.navBtn"
    type="button"
    @click="$emit('onClick', $event)"
  >
    <font-awesome-icon :icon="['fas', 'bars']" />
  </button>
</template>

<style module>
.navBtn {
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;
  width: 100px;
  height: 100px;
  background-color: var(--color-primary);
  font-size: 40px;
  z-index: 9000;
}
</style>
