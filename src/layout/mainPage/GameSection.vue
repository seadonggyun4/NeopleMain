<template>
  <section :class="$style.gameSection">
    <!--윈도우 컨테이너-->
    <article v-if="browserWidth > 1200" :class="$style.gameContainer">
      <div
        v-for="item in gameData"
        :class="[
          $style.game,
          detailShow === item.index ? $style.detailShow : '',
        ]"
        :key="item.index"
        @mouseenter="hoverGame(item.index)"
        @mouseleave="clearHoverTarget"
      >
        <img
          v-if="hoverTarget !== item.index"
          :src="require(`@/assets/img/gameSection/game${item.index}.png`)"
          alt="game background"
          aria-hidden="true"
        />
        <div
          v-if="hoverTarget === item.index"
          :class="$style.effectImage"
          :style="{
            backgroundSize: 'cover',
            '--row': row,
            '--col': col,
            '--img-url':
              'url(' +
              require(`@/assets/img/gameSection/game${item.index}.png`) +
              ')',
          }"
          id="effectImage"
          aria-hidden="true"
        />
        <div v-if="item.index !== detailShow" :class="$style.btnWrap">
          <a :class="$style.playLink" href="#" target="_blank">
            <font-awesome-icon
              :icon="['fas', 'play-circle']"
              aria-hidden="true"
            />
            Watch video
          </a>
          <TheButton
            icon="chevron-circle-right"
            @onClick="showDetail(item.index)"
          >
            자세히 보기
          </TheButton>
        </div>
        <div
          :class="$style.detailBox"
          :style="{
            background:
              'url(' +
              require(`@/assets/img/gameSection/detail${item.index}.png`) +
              ') 50% 50% no-repeat',
          }"
        >
          <button :class="$style.closeDetailBtn" @click="closeDetail">
            <font-awesome-icon :icon="['fas', 'times']" aria-hidden="true" />
          </button>
          <TheButton
            icon="chevron-circle-down"
            color="#000000"
            @onClick="moveGameSite(item.index)"
          >
            사이트 바로가기
          </TheButton>
        </div>
      </div>
    </article>
    <!--모바일 컨테이너-->
    <article v-if="browserWidth <= 1200" :class="$style.mobileGameContainer">
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
              require(`@/assets/img/gameSection/game${item.index}.png`) +
              ') right center / cover no-repeat',
          }"
        >
          <a :class="$style.playLink" href="#" target="_blank">
            <font-awesome-icon
              :icon="['fas', 'play-circle']"
              aria-hidden="true"
            />
            Watch video
          </a>
          <TheButton
            icon="chevron-circle-right"
            height="60px"
            width="400px"
            fontSize="20px"
            @onClick="showDetail(item.index)"
          >
            사이트 바로가기
          </TheButton>
        </li>
      </ul>
      <div :class="$style.mobileControler">
        <button
          v-for="item in gameData"
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
    </article>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      gameData: [
        {
          index: 1,
          link: "",
        },
        {
          index: 2,
          link: "",
        },
        {
          index: 3,
          link: "",
        },
        {
          index: 4,
          link: "",
        },
      ],
      // hoverEffect
      hoverTarget: 0,
      row: 13,
      col: 9,
      duration: 500,
      delayDelta: 50,
      // detailBox
      detailShow: 0,
      // 슬라이드
      activeNum: null,
    };
  },
  computed: {
    ...mapState("common", ["browserWidth"]),
    reversedSlidData: function () {
      let arr = this.gameData;

      return [...arr].reverse();
    },
  },
  methods: {
    hoverGame(num) {
      if (this.detailShow === num) return;
      this.hoverTarget = num;

      this.$nextTick(() => {
        this.animate(num);
      });
    },
    clearHoverTarget() {
      this.hoverTarget = 0;
    },
    animate(type) {
      if (type === null) return;
      const x = this.col - 1;
      const y = this.row - 1;

      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
          const fragment = document.createElement("div");
          fragment.className = "fragment";
          fragment.style.setProperty("--x", j);
          fragment.style.setProperty("--y", i);

          let delay = 0;

          // animation 타입 설정
          switch (type) {
            case 1:
              delay = i * 2;
              break;
            case 2:
              delay = j * 2;
              break;
            case 3:
              delay = Math.floor(Math.random() * (x + y - 0 + 1) + 0);
              break;
            case 4:
              delay = x + y - (j + i);
              break;
          }

          const isOdd = (i + j) % 2 === 0;
          fragment.style.setProperty(
            "--rotateX",
            `rotateX(${isOdd ? -180 : 0}deg)`
          );
          fragment.style.setProperty(
            "--rotateY",
            `rotateY(${isOdd ? 0 : -180}deg)`
          );
          fragment.style.setProperty("--delay", delay * this.delayDelta + "ms");
          fragment.style.setProperty("--duration", this.duration + "ms");

          document.querySelector("#effectImage").appendChild(fragment);

          // 부드러운 그리드 효과를 위해 css 변수 초기화
          const timer = setTimeout(() => {
            fragment.style.willChange = "initial";
            fragment.style.transform = "initial";
            fragment.style.animation = "initial";
            fragment.style.backfaceVisibility = "initial";
            fragment.style.opacity = 1;
            clearTimeout(timer);
          }, this.duration + delay * this.delayDelta);
        }
      }
    },
    showDetail(num) {
      this.detailShow = num;
    },
    closeDetail() {
      this.detailShow = 0;
    },
    moveGameSite(num) {
      let link = "#";

      switch (num) {
        case 1:
          link = "https://df.nexon.com/";
          break;
        case 2:
          link = "https://dnfm.nexon.com/Event/2023/1221/update_989sd";
          break;
        case 3:
          link = "https://cyphers.nexon.com/intro/202312";
          break;
        case 4:
          link = "https://dd.nexon.com/ko/main";
          break;
      }

      const a = document.createElement("a");
      a.setAttribute("target", "_blank");
      a.setAttribute("href", link);
      a.click();
    },
    // 슬라이드 액티브
    activeSlide(index) {
      if (typeof index !== "number") return;
      this.activeNum = index;
    },
  },
};
</script>

<style module>
.gameSection {
  width: 100%;
  height: 100vh;
}

.gameContainer {
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--color-curtain);
  overflow: hidden;
}

/* 윈도우 섹션 =====================================================================================================   */
/*game*/
.game {
  position: relative;
  flex: 1;
  height: 100%;
}

.game img {
  width: 100%;
  height: 100%;
}

.game:not(.detailShow):after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("@/assets/img/gameSection/game_opacity.png") no-repeat;
}

.game:hover:after {
  content: "";
  display: none;
}

/*effectImage*/
.effectImage {
  --box-width: calc(100vw / 4);
  --box-height: calc(100vh);
  --frag-width: calc(var(--box-width) / var(--col));
  --frag-height: calc(var(--box-height) / var(--row));

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: var(--box-width);
  height: var(--box-height);
}

/*btnWrap*/
.btnWrap {
  position: absolute;
  bottom: 0;
  left: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 30px;
  width: 250px;
  transform: translate3d(-50%, 0, 0);
  z-index: 10;
}

.playLink {
  display: flex;
  column-gap: 10px;
  color: var(--color-white);
}

.playLink:hover {
  text-decoration: underline;
}

.playLink svg {
  color: var(--color-primary);
}

/*detailBox*/
.detailBox {
  position: absolute;
  top: 0;
  width: 100%;
  height: 0;
  background-color: #1a1a1a;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
}

.game.detailShow .detailBox {
  height: 100%;
}

.closeDetailBtn {
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--color-primary);
  font-size: 50px;
}

.detailBox button:nth-child(2) {
  position: absolute;
  bottom: 30px;
  right: 0;
  transform: translateX(-40%);
}

/* 모바일 section =====================================================================================================*/
.mobileGameContainer {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-curtain);
  overflow: hidden;
}
/* 슬라이드 박스 */
.slideBox {
  position: relative;
  width: 100%;
  height: 100%;
}

.slideBox li {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  row-gap: 50px;
  padding: 70px 0;
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

/* 링크 */
.mobileGameContainer .playLink {
  width: 400px;
  font-size: 30px;
}

/* 컨트롤러 */
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

<style>
/* 이미지 조각 ====================================================================  */
.fragment {
  --x-offset: calc(var(--x) * var(--frag-width) * -1);
  --y-offset: calc(var(--y) * var(--frag-height) * -1);
  --rotateX: rotateX(0);
  --rotateY: rotateY(0);
  width: var(--frag-width);
  height: var(--frag-height);
  background: var(--img-url) var(--x-offset) var(--y-offset) / var(--box-width)
    var(--box-height) no-repeat;
  backface-visibility: hidden;
  will-change: transform;
  transform: var(--rotateX) var(--rotateY) scale(0.8);
  animation: flip var(--duration) linear var(--delay) forwards;
  opacity: 0;
}

@keyframes flip {
  0% {
    transform: var(--rotateX) var(--rotateY) scale(0.8);
    opacity: 0;
  }
  15% {
    transform: var(--rotateX) var(--rotateY) scale(0.8);
    opacity: 0;
  }
  70% {
    transform: rotateX(0) rotateY(0) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: rotateX(0) rotateY(0) scale(1);
    opacity: 1;
  }
}
</style>
