<template>
  <section :class="$style.modalContainer">
    <!-- ===================== [ 공통 ] ===================== -->
    <!--알림 팝업-->
    <TheAlertModal
      v-if="alret.show"
      :alertType="alret.type"
      @onClose="CLOSE_ALRET"
    >
      <template #alertText>
        <strong>{{ alret.text }}</strong>
      </template>
    </TheAlertModal>
    <!--로딩 팝업-->
    <TheLoadingModal v-if="loading" />
  </section>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "modalContainer",
  computed: {
    ...mapState("common", ["alret", "loading"]),
  },
  methods: {
    ...mapMutations("common", ["CLOSE_ALRET"]),
  },
};
</script>

<style module>
.modalContainer {
  position: relative;
  top: 0;
  bottom: 0;
}
</style>
