<template>
  <nav :class="$style.navigation">
    <ul :class="$style.navList">
      <li :class="[$style.navItem, $style.active]">
        <router-link to="/">
          HOME
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </router-link>
      </li>
      <li :class="$style.navItem">
        <button type="button" @click="setSubNav(1)">
          네오플을 말하다
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </button>
        <ul v-if="openSubNav === 1" :class="$style.subNavList">
          <li><a href="#1">네오플 소개</a></li>
          <li><a href="#12">네오플 과거사</a></li>
          <li><a href="#13">네오플 라이프</a></li>
          <li><a href="#14">네오플 소식들</a></li>
        </ul>
      </li>

      <li :class="$style.navItem">
        <a href="#2">
          게임소개
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </a>
      </li>
      <li :class="$style.navItem">
        <a href="#3">
          네오플인을 찾습니다
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </a>
      </li>
      <li :class="$style.navItem">
        <a href="https://www.neople.co.kr/neople/en/">
          English
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </a>
      </li>
      <li :class="$style.navItem">
        <a href="https://blog.naver.com/neoplog" target="_blank">
          <img src="@/assets/img/logo_naver.png" aria-hidden="true" />
        </a>
        <a href="https://www.instagram.com/neople_insta/" target="_blank">
          <img src="@/assets/img/logo_instagram.png" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F76123372"
          target="_blank"
        >
          <img src="@/assets/img/logo_linkedin.png" aria-hidden="true" />
        </a>
      </li>
    </ul>
    <button
      :class="$style.navBtn"
      type="button"
      @click="$emit('onClick', $event)"
    >
      <font-awesome-icon :icon="['fas', 'times']" />
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      openSubNav: 0,
    };
  },
  methods: {
    setSubNav(num) {
      if (this.openSubNav === num) {
        this.openSubNav = 0;
        return;
      }
      this.openSubNav = num;
    },
  },
};
</script>

<style module>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  z-index: 9000;
}

.navList {
  width: 450px;
  background: #ebebeb;
  transform: translateX(-450px);
  animation: showNav 0.5s ease-in-out forwards;
}

.navItem {
  width: 100%;
}

.navItem:not(:last-child) a,
.navItem:not(:last-child) button {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 30px 8%;
  border-right: 1px solid #d3d3d3;
  border-bottom: 1px solid #c1c3ca;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}

.navItem:not(:last-child) a svg,
.navItem:not(:last-child) button svg {
  position: absolute;
  right: 8%;
}

.navItem.active {
  border: none;
  background-color: var(--color-curtain);
  color: var(--color-white);
}

.navItem:last-child {
  display: flex;
}

.navItem:last-child a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: var(--color-primary);
}

.navItem:last-child a img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.navList .subNavList {
  opacity: 0;
  overflow: hidden;
  animation: showSubNav 0.3s ease-in-out forwards;
}

.navList .subNavList li a {
  color: #717171;
  padding: 25px 12%;
  font-size: 18px;
}

.navList .subNavList li a:hover {
  text-decoration: underline;
}

.navBtn {
  padding: 8px;
  width: 100px;
  height: 100px;
  background-color: var(--color-primary);
  font-size: 40px;
  transform: translateX(-450px);
  animation: showNav 0.5s ease-in-out forwards;
}

@keyframes showNav {
  0% {
    transform: translateX(-450px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes showSubNav {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
