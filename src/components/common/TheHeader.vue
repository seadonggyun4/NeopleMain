<template>
  <header :class="$style.header" @mouseleave="closeSubNav">
    <!-- main header -->
    <div :class="$style.headerWrap">
      <h1 :class="$style.logo" aria-label="Neople Logo">
        <router-link to="/">
          <img src="@/assets/img/LOGO.gif" alt="Logo" aria-hidden="true" />
        </router-link>
      </h1>
      <nav :class="$style.nav">
        <ol>
          <li
            v-for="(menu, i) in mainNavMenu"
            :key="i"
            :class="activeMainPath === menu?.to ? $style.active : ''"
            @mouseenter="openSubNav(menu?.to)"
          >
            <router-link :to="menu?.to">{{ menu?.title }}</router-link>
          </li>
        </ol>
      </nav>
      <ul :class="$style.outerSite">
        <li>
          <a href="https://blog.naver.com/neoplog" target="_blank">
            <img src="@/assets/img/logo_naver.png" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/neople_insta/" target="_blank">
            <img src="@/assets/img/logo_instagram.png" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F76123372"
            target="_blank"
          >
            <img src="@/assets/img/logo_linkedin.png" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://www.neople.co.kr/neople/en/" target="_blank">
            ENGLISH
          </a>
        </li>
      </ul>
    </div>
    <!-- sub Nav -->
    <ol
      :class="[
        $style.subNav,
        activeMainPath !== '' && activeMainPath !== null
          ? $style.show
          : activeMainPath !== null
          ? $style.hide
          : '',
      ]"
    >
      <li v-for="(menu, i) in subNavMenu" :key="i">
        <router-link :to="menu?.to">
          {{ menu?.title }}
        </router-link>
      </li>
    </ol>
  </header>
</template>

<script>
export default {
  data() {
    return {
      // 메인메뉴
      mainNavMenu: [
        {
          title: "네오플을 말하다",
          to: "#1",
        },
        {
          title: "게임소개",
          to: "#2",
        },
        {
          title: "네오플인을 찾습니다",
          to: "#3",
        },
        {
          title: "IR",
          to: "#4",
        },
      ],
      activeMainPath: null,
      // 서브메뉴
      subNavMenu: [],
      talkNeople: [
        {
          title: "네오플 소개",
          to: "#1",
        },
        {
          title: "네오플 과거사",
          to: "#12",
        },
        {
          title: "네오플 라이프",
          to: "#13",
        },
        {
          title: "새로운 소식들",
          to: "#14",
        },
      ],
      gameIntroduce: [
        {
          title: "게임 소개",
          to: "#2",
        },
      ],
      findeNeople: [
        {
          title: "네오플인을 찾습니다",
          to: "#3",
        },
      ],
    };
  },
  methods: {
    // subNav 오픈
    openSubNav(path) {
      this.activeMainPath = path;
      switch (path) {
        case "#1":
          this.subNavMenu = this.talkNeople;
          break;
        case "#2":
          this.subNavMenu = this.gameIntroduce;
          break;
        case "#3":
          this.subNavMenu = this.findeNeople;
          break;
        case "#4":
          this.subNavMenu = [];
          this.activeMainPath = null;
          break;
        default:
          this.subNavMenu = [];
          this.activeMainPath = null;
          break;
      }
    },
    // subNav 닫기
    closeSubNav() {
      if (this.activeMainPath === null) return;
      this.activeMainPath = "";
      this.subNavMenu = [];
    },
  },
};
</script>

<style module>
.header {
  position: fixed;
  width: 100%;
  z-index: 9000;
}

/* headerWrap =============================================================== */
.headerWrap {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: calc(100% - 8px);
  height: 89px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: var(--color-white);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  z-index: 100;
}

/* Logo */
.logo {
  margin: 20px 0;
}

.logo a img {
  width: 100%;
  object-fit: cover;
}

/* nav */
.nav {
  height: 100%;
  width: 100%;
}

.nav > ol {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  height: 100%;
}

.nav > ol li {
  position: relative;
  height: 100%;
  font-weight: bold;
}

.nav > ol li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.nav > ol li:not(:nth-child(3)) {
  width: 120px;
}

.nav > ol li:nth-child(3) {
  width: 150px;
}

.nav > ol li:not(:last-child):after {
  content: "";
  position: absolute;
  top: 50%;
  width: 1px;
  height: 30%;
  border-radius: 5px;
  background-color: #b1b1b1;
  transform: translate3d(0, -50%, 0);
}

.nav > ol li:not(:nth-child(2)):after {
  right: -10%;
}

.nav > ol li:nth-child(2):after {
  right: 5%;
}

.nav > ol li:before {
  content: "";
  position: absolute;
  bottom: -25px;
  right: 0;
  width: 25px;
  height: 25px;
  background-color: var(--color-primary);
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.nav > ol li.active::before {
  opacity: 1;
}

/* outerSite */
.outerSite {
  position: relative;
  display: flex;
  align-items: flex-end;
  column-gap: 10px;
  margin: 20px 30px;
}

.outerSite li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
}

.outerSite li a {
  width: 100%;
}

.outerSite li a img {
  width: 100%;
  object-fit: cover;
}

.outerSite li:last-child {
  position: absolute;
  top: -5px;
  right: 15px;
  font-size: 12px;
  font-weight: bold;
}

/* subNav =============================================================== */
.subNav {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  width: calc(100% - 8px);
  //height: calc(89px + 48px);
  height: 0;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: var(--color-primary);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  z-index: 99;
}

.subNav.show {
  animation: showSubNav 0.3s ease-in-out;
  animation-fill-mode: forwards;
}

.subNav.hide {
  animation: hideSubNav 0.3s ease-in-out;
  animation-fill-mode: forwards;
}

.subNav li {
  padding: 5px;
}

.subNav li a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  transition: all 0.2s ease-in-out;
}

.subNav li:hover a {
  background-color: #202124;
  color: var(--color-white);
}

.subNav li.active a {
  background-color: #202124;
  color: var(--color-white);
}

@keyframes showSubNav {
  0% {
    height: 0;
  }
  100% {
    height: calc(89px + 48px);
  }
}

@keyframes hideSubNav {
  0% {
    height: calc(89px + 48px);
  }
  100% {
    height: 0;
  }
}
</style>
