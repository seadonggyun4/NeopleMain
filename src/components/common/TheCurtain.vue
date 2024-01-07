<template>
  <section :class="$style.curtainSection">
    <div
      :class="[
        $style.curtain,
        !firstRender ? (show ? $style.show : $style.hide) : '',
      ]"
      aria-label="페이지 이동 효과"
    >
      <canvas
        v-if="curtain.time >= 10000"
        :class="[
          $style.curtainCanvas,
          !firstRender ? (show ? $style.show : $style.hide) : $style.show,
        ]"
        id="myCanvas"
        width="800"
        height="800"
        aria-hidden="true"
      />
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Zfont from "zfont";
import Zdog from "zdog";

export default {
  name: "TheCurtain",
  data() {
    return {
      // curtain
      show: true,
      // 3dText
      time: 0,
      tStep: 5,
      amplitude: 0.75,
      frequency: 80,
    };
  },
  props: {
    firstRender: Boolean,
  },
  computed: {
    ...mapState("common", ["curtain"]),
  },
  mounted() {
    this.handleCloseCurtain();
    const { canvas, title, titleShadow, subText, subTextShadow } =
      this.set3DText();
    this.draw3DText(canvas, title, titleShadow, subText, subTextShadow);
  },
  methods: {
    ...mapMutations("common", ["CLOSE_CURTAIN"]),
    // 커튼 닫기 효과
    handleCloseCurtain() {
      setTimeout(() => {
        this.show = false;
        // 커튼 데이터 fasle 로 초기환
        setTimeout(() => {
          this.CLOSE_CURTAIN();
        }, 750);
      }, this.curtain.time / 2);
    },
    // 3D Text 데이터 세팅
    set3DText() {
      Zfont.init(Zdog);

      // 캔버스 받기
      const canvas = new Zdog.Illustration({
        element: "#myCanvas",
        dragRotate: true,
        rotate: { x: -0.32, y: 0.64, z: 0 },
      });

      // 폰트 적용
      const font = new Zdog.Font({
        src: "https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf",
      });

      // Neople 글자 생성
      const title = new Zdog.TextGroup({
        addTo: canvas,
        font: font,
        value: "Neople",
        fontSize: 100,
        translate: { y: -100 },
        textAlign: "center",
        textBaseline: "middle",
        color: "#fdb813",
        fill: true,
      });

      // Neople 글자 그림자 생성
      const titleShadow = title.copyGraph({
        translate: { z: -6, y: -100 },
        color: "#ecd65b",
      });

      // WE MAKE WONDERS !! 글자 생성
      const subText = new Zdog.TextGroup({
        addTo: canvas,
        font: font,
        value: "WE MAKE WONDERS !!",
        fontSize: 60,
        textAlign: "center",
        textBaseline: "middle",
        color: "#fff",
        fill: true,
      });

      // WE MAKE WONDERS !! 글자 그림자 생성
      const subTextShadow = subText.copyGraph({
        translate: { z: -6 },
        color: "#aab",
      });

      return {
        canvas,
        title,
        titleShadow,
        subText,
        subTextShadow,
      };
    },
    // Wave 애니메이션 효과 함수
    waveAnimation(group) {
      group.children.forEach((shape) => {
        let x = shape.translate.x + this.time;
        shape.translate.y += this.amplitude * Math.sin(x / this.frequency);
      });
    },
    // 3D Text 그리기 효과
    draw3DText(canvas, title, titleShadow, subText, subTextShadow) {
      // Animation loop
      const animate = () => {
        this.waveAnimation(title);
        this.waveAnimation(titleShadow);
        this.waveAnimation(subText);
        this.waveAnimation(subTextShadow);
        this.time = this.time + this.tStep;
        canvas.updateRenderGraph();
        requestAnimationFrame(animate);
      };
      animate();
    },
  },
};
</script>

<style module>
.curtainSection {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999;
}
/*첫번째*/
.curtain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-curtain);
}
.curtain.show {
  animation: curtainShow 0.8s ease-in-out;
  transform-origin: left;
}
.curtain.hide {
  animation: curtainHide 0.8s ease-in-out;
  transform-origin: right;
  animation-fill-mode: forwards;
}

@keyframes curtainShow {
  0% {
    transform: scaleX(0);
    clip-path: polygon(0 0, 83% 0, 100% 100%, 0% 100%);
  }
  100% {
    transform: scaleX(1);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}

@keyframes curtainHide {
  0% {
    transform: scaleX(1);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  100% {
    transform: scaleX(0);
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
  }
}

.curtainCanvas {
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate3d(-50%, -50%, 0);
}

.curtainCanvas.show {
  animation: showDown 0.5s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
}
.curtainCanvas.hide {
  animation: hideUp 0.5s ease-in-out;
}

@keyframes showDown {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -60%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0);
  }
}

@keyframes hideUp {
  0% {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(-50%, -60%, 0);
  }
}
</style>
