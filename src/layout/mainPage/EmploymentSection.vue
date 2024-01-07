<template>
  <section :class="$style.employmentSection">
    <a
      v-if="browserWidth > 1200"
      :class="$style.employmentContent"
      href="https://career.nexon.com/user/recruit/member/postList?joinCorp=NO"
      target="_blank"
    >
      <h2 :class="$style.title">네오플라이프 함께하실래요?</h2>
      <TheButton color="#00000"> 채용사이트 바로가기 </TheButton>
    </a>
    <a
      v-if="browserWidth <= 1200"
      :class="$style.modileEmploymentContent"
      href="https://career.nexon.com/user/recruit/member/postList?joinCorp=NO"
      target="_blank"
    >
      <h2 :class="$style.title">
        같이 한라봉 드실래요? 다니고 싶은 회사, 끝까지 함께하고 싶은 의리 있는
        회사가 되기 위해 오늘도 네오플은 고민하고 또 고민합니다.
      </h2>
      <div :class="$style.btnWrap">
        <TheButton
          icon="chevron-circle-right"
          height="60px"
          width="400px"
          fontSize="20px"
        >
          채용사이트 바로가기
        </TheButton>
      </div>
    </a>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("common", ["browserWidth"]),
  },
};
</script>

<style module>
.employmentSection {
  position: relative;
  padding: 150px 200px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("@/assets/img/employmentSection/bg.png") no-repeat;
  background-size: cover;
}

/* 윈도우 컨텐츠 */
.employmentSection .employmentContent {
  display: block;
  width: 490px;
}

.employmentContent .title {
  width: 490px;
  height: 420px;
  font-size: 0;
  background: url("@/assets/img/employmentSection/title.png") no-repeat;
}

/* 모바일 컨텐츠 */
.modileEmploymentContent {
  display: block;
  width: 490px;
}

.modileEmploymentContent .title {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  background: url("@/assets/img/employmentSection/title_M.png") no-repeat;
}

.modileEmploymentContent .btnWrap {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
