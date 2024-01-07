<template>
  <section :class="$style.slideSection">
    <!--슬라이드-->
    <ul :class="$style.slideBox">
      <li
        v-for="item in reversedSlidData"
        :key="item.index"
        :class="
          activeNum
            ? activeNum === item.index
              ? $style.active
              : $style.hide
            : ''
        "
        :style="{
          background:
            'url(' +
            require(`@/assets/img/slideSection/slideBg-${item.index}.jpg`) +
            ') 50% 50% no-repeat',
          backgroundSize: 'cover',
        }"
        :aria-label="item.btnText"
      />
    </ul>
    <!--윈도우 컨트롤러-->
    <div v-if="browserWidth > 1200" :class="$style.controler">
      <button
        v-for="item in slideData"
        :key="item.index"
        :class="
          activeNum
            ? activeNum === item.index
              ? $style.active
              : ''
            : activeNum === null && item.index === 1
            ? $style.active
            : ''
        "
        :style="{
          background:
            'url(' +
            require(`@/assets/img/slideSection/controlerBg-${item.index}.jpg`) +
            ') no-repeat',
        }"
        type="button"
        @click="activeSlide(item.index)"
      >
        <img
          :src="
            require(`@/assets/img/slideSection/contorlerImg-${item.index}.png`)
          "
          alt="effect"
          aria-hidden="true"
        />
        <span>{{ item.btnText }}</span>
      </button>
    </div>
    <!--모바일 컨트롤러-->
    <div v-if="browserWidth <= 1200" :class="$style.mobileControler">
      <button
        v-for="item in slideData"
        :key="item.index"
        :class="
          activeNum
            ? activeNum === item.index
              ? $style.active
              : ''
            : activeNum === null && item.index === 1
            ? $style.active
            : ''
        "
        type="button"
        @click="activeSlide(item.index)"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SlideSection",
  data() {
    return {
      activeNum: null,
      slideData: [
        {
          index: 1,
          btnText: "멋진 바람이 분다",
        },
        {
          index: 2,
          btnText: "새로운 재미를 찾는다",
        },
        {
          index: 3,
          btnText: "새로운 공간에 불어온다",
        },
        {
          index: 4,
          btnText: "WE MAKE WONDERS!",
        },
        {
          index: 5,
          btnText: "새로운 햇살이 들어온다",
        },
      ],
    };
  },
  computed: {
    ...mapState("common", ["browserWidth"]),
    reversedSlidData: function () {
      let arr = this.slideData;

      return [...arr].reverse();
    },
  },
  mounted() {
    setInterval(() => {
      this.autoSlide();
    }, 5000);
  },
  methods: {
    // 슬라이드 액티브
    activeSlide(index) {
      if (typeof index !== "number") return;
      this.activeNum = index;
    },
    // 자동 슬라이드 액티브
    autoSlide() {
      if (!this.activeNum) {
        this.activeNum = 1;
      }
      if (this.activeNum > this.slideData.length - 1) {
        this.activeNum = 0;
      }
      this.activeSlide(this.activeNum + 1);
    },
  },
};
</script>

<style module>
.slideSection {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 866px;
  overflow: hidden;
}

.slideBox {
  position: relative;
  width: 100%;
  height: 100%;
}

.slideBox li {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  min-width: 100vw;
}

.slideBox li.hide {
  z-index: 2;
  animation: hideSlide ease-in-out 1.5s forwards;
}

.slideBox li.active {
  z-index: 3;
  animation: activeSlide ease-in-out 1.5s forwards;
}

@keyframes hideSlide {
  0% {
    left: 0;
  }
  100% {
    left: -100vw;
  }
}

@keyframes activeSlide {
  0% {
    right: -100vw;
  }
  100% {
    right: 0;
  }
}

/* 윈도우 컨트롤러 */
.controler {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  width: 100%;
  z-index: 10;
}

.controler button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
  color: var(--color-white);
  transition: height 0.2s ease-in-out;
}

.controler button img {
  position: absolute;
  bottom: 0;
  right: 10px;
  height: 100%;
  transform: translate3d(0, 100px, 0);
  transition: transform 0.3s ease-in-out;
}

.controler button:hover {
  border-top: 5px solid var(--color-primary);
  height: 100px;
}

.controler button.active {
  border-top: 5px solid var(--color-primary);
  height: 100px;
}

.controler button.active img {
  z-index: 2;
  transform: translate3d(0, 0, 0);
}

.controler button span {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

/* 모바일 컨트롤러 */
.mobileControler {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
  column-gap: 15px;
  padding: 20px;
  width: 100%;
  z-index: 10;
}

.mobileControler button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ebeeeb;
  background-color: var(--color-white);
  transition: 0.3s ease-in-out;
}

.mobileControler button.active {
  border: 2px solid var(--color-primary);
  background-color: var(--color-primary);
}
</style>
