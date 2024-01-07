<template>
  <section :class="$style.talkNeopleSection">
    <h2 :class="$style.title">네오플을 말하다</h2>
    <!--윈도우 리스트-->
    <ul v-if="browserWidth > 1200" :class="$style.talkNeopleList">
      <li v-for="(item, i) in list" :class="$style.listItem" :key="i">
        <strong>{{ item }}</strong>
        <article :class="$style.talkContent" @mouseover="showContent(i + 1)">
          <span :class="$style.circle" aria-hidden="true">
            <img
              :src="require(`@/assets/img/talkNeopleSection/main${i + 1}.png`)"
              alt="main image"
              aria-hidden="true"
            />
          </span>
          <div v-if="i + 1 === show" :class="$style.content">
            <router-link to="#">
              <img
                :src="
                  require(`@/assets/img/talkNeopleSection/text${i + 1}.png`)
                "
                alt="text"
                aria-hidden="true"
              />
              <img
                src="@/assets/img/talkNeopleSection/moreBtn.png"
                alt="more 버튼"
                aria-hidden="true"
              />
            </router-link>
            <button type="button">
              <font-awesome-icon
                :icon="['fas', 'times']"
                @click="closeContent($event)"
              />
            </button>
          </div>
          <button v-if="i + 1 !== show" type="button">
            <font-awesome-icon :icon="['fas', 'angle-down']" />
          </button>
        </article>
      </li>
    </ul>
    <!--모바일 리스트-->
    <ul v-if="browserWidth <= 1200" :class="$style.modileTalkNeopleList">
      <li v-for="(item, i) in list" :class="$style.listItem" :key="i">
        <a
          href="#"
          :style="{
            background:
              'url(' +
              require(`@/assets/img/talkNeopleSection/neople_mobi${
                i + 1
              }.png`) +
              ') 50% 50% no-repeat',
            backgroundSize: 'contain',
          }"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      show: 0,
      list: ["네오플 소개", "네오플 소개", "네오플 라이프", "새로운 소식들"],
    };
  },
  computed: {
    ...mapState("common", ["browserWidth"]),
  },
  methods: {
    showContent(index) {
      this.show = index;
    },
    closeContent(e) {
      e.preventDefault();
      this.show = 0;
    },
  },
};
</script>

<style module>
.talkNeopleSection {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("@/assets/img/talkNeopleSection/talkNeople_bg.jpg") 50% 50%
    no-repeat;
  background-size: cover;
}

.title {
  margin: 150px auto 40px;
  width: 100%;
  height: 105px;
  font-size: 0;
  background: url("@/assets/img/talkNeopleSection/title.png") no-repeat center
    top;
  background-size: contain;
}

/* 윈도우 리스트 */
.talkNeopleList {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 50px;
}

.listItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
}

.listItem strong {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-white);
}

.talkContent {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.talkContent .circle {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: var(--color-primary);
  z-index: 1;
}

.talkContent .circle img {
  position: absolute;
  top: 20px;
  left: 20px;
}

.talkContent button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--color-primary);
  transform: translate3d(0, -15px, 0);
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 0;
  border-bottom-right-radius: 38%;
  border-bottom-left-radius: 38%;
  background-color: var(--color-primary);
  transform: translate3d(0, -100px, 0);
  animation: dropdown 0.3s ease-in-out forwards;
}

.content a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  opacity: 0;
  animation: contentShow 1s ease-in-out forwards;
}

.content button {
  position: absolute;
  bottom: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--color-primary);
}

@keyframes dropdown {
  0% {
    height: 0;
  }
  100% {
    height: 300px;
  }
}

@keyframes contentShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 모바일 리스트 */
.modileTalkNeopleList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin: 0 auto;
  width: 100%;
}

.modileTalkNeopleList li {
  width: 100%;
  height: 100%;
}

.modileTalkNeopleList li a {
  width: 260px;
  height: 270px;
}
</style>
