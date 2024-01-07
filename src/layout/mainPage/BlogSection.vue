<template>
  <section :class="$style.blogSection">
    <a
      v-if="browserWidth > 1200"
      :class="$style.blogContent"
      href="https://blog.naver.com/neoplog"
      target="_blank"
    >
      <h2 :class="$style.title">네오플 블로그 사이트 입니다.</h2>
      <TheButton icon="chevron-circle-right">
        네오플 블로그 바로가기
      </TheButton>
    </a>
    <a
      v-if="browserWidth <= 1200"
      :class="$style.mobileBlogContent"
      href="https://blog.naver.com/neoplog"
      target="_blank"
    >
      <h2 :class="$style.title">네오플 블로그 사이트 입니다.</h2>
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
.blogSection {
  position: relative;
  padding: 150px 200px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("@/assets/img/blogSection/bg.jpg") center center no-repeat;
  background-size: cover;
}

/* 윈도우 */
.blogContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 80px;
  width: 490px;
}

.blogContent .title {
  width: 490px;
  height: 420px;
  font-size: 0;
  background: url("@/assets/img/blogSection/title.png") no-repeat;
}

/* 모바일 */

.mobileBlogContent .title {
  position: absolute;
  left: 0;
  bottom: 200px;
  width: 100%;
  height: 80%;
  font-size: 0;
  background: url("@/assets/img/blogSection/title_m.png") no-repeat;
}
</style>
