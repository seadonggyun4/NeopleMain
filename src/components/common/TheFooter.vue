<template>
  <footer :class="$style.footer">
    <router-link to="/">
      <img
        :class="$style.logo"
        src="@/assets/img/LOGO_footer.gif"
        alt="Logo"
        aria-hidden="true"
      />
    </router-link>
    <!-- siteLinkBox -->
    <article v-if="browserWidth > 1200" :class="$style.siteLinkBox">
      <ul v-for="(list, i) in siteLinkData" :key="i" :class="$style.linkList">
        <li v-for="(item, i) in list" :key="i">
          <router-link :to="item?.link">
            {{ item?.text }}
          </router-link>
        </li>
      </ul>
    </article>
    <article :class="$style.detailWrap">
      <div :class="$style.subBtnWrap">
        <button
          v-if="browserWidth > 1200"
          type="button"
          @click="
            SET_ALRET({ type: 'success', text: '기능을 준비중 입니다. 🙂' })
          "
        >
          영상정보처리방침
        </button>
        <button
          type="button"
          @click="
            SET_ALRET({ type: 'success', text: '기능을 준비중 입니다. 🙂' })
          "
        >
          개인정보처리방침
        </button>
        <button
          type="button"
          @click="
            SET_ALRET({ type: 'success', text: '기능을 준비중 입니다. 🙂' })
          "
        >
          CONTACT US
        </button>
        <button
          type="button"
          @click="
            SET_ALRET({ type: 'success', text: '기능을 준비중 입니다. 🙂' })
          "
        >
          FAMILY SITE
        </button>
      </div>
      <p :class="$style.details">
        (주)네오플 | 대표:윤명진 제주특별자치도 제주시 1100로 3198-13 (제주시
        노형동 68-1)<br />
        사업자등록번호 201-81-64417<br />
        통신판매업 신고 제2017-제주노형-00064호
        <strong>사업자정보확인</strong>
        <br />
        <span>
          © 2005 NEOPLE Inc. & NEXON Korea Corporation All Rights Reserved.
        </span>
        <br />
      </p>
    </article>
  </footer>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      siteLinkData: [
        [
          {
            text: "네오플을 말하다",
            link: "#",
          },
          {
            text: "네오플 소개",
            link: "#",
          },
          {
            text: "네오플 과거사",
            link: "#",
          },
          {
            text: "네오플 라이프",
            link: "#",
          },
          {
            text: "네오플 소식들",
            link: "#",
          },
        ],
        [
          {
            text: "게임 소개",
            link: "#",
          },
          {
            text: "게임 소개",
            link: "#",
          },
        ],
        [
          {
            text: "네오플인을 찾습니다",
            link: "#",
          },
          {
            text: "네오플인을 찾습니다",
            link: "#",
          },
        ],
      ],
    };
  },
  computed: {
    ...mapState("common", ["browserWidth"]),
  },
  methods: {
    ...mapMutations("common", ["SET_ALRET"]),
  },
};
</script>

<style module>
.footer {
  position: relative;
  display: flex;
  padding: 30px 60px 0 60px;
  height: 170px;
  width: 100%;
  background: #ebebeb;
  font-size: 12px;
}

.logo {
  width: 90px;
}
/* siteLinkBox */
.siteLinkBox {
  display: flex;
  column-gap: 60px;
  margin-left: 80px;
}

.linkList li:nth-child(1) {
  font-weight: bolder;
  font-size: 1rem;
  margin-bottom: 15px;
}

.linkList li:not(:nth-child(1)) {
  margin-bottom: 5px;
  color: #909090;
}

.linkList li:not(:nth-child(1)):hover {
  text-decoration: underline;
}

/* detailWrap */
.detailWrap {
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.subBtnWrap {
  display: flex;
  column-gap: 10px;
}

.subBtnWrap button {
  padding: 5px 20px;
  width: 150px;
  font-size: 11px;
  border-radius: 3px;
  border: 1px solid #dfdfdf;
  background-color: var(--color-white);
}

.details {
  display: block;
  text-align: right;
  color: #616161;
  line-height: 150%;
}

.details strong {
  color: black;
  font-weight: bold;
}

.details span {
  color: #919191;
  font-size: 11px;
}

@media (max-width: 1200px) {
  .footer {
    flex-direction: column;
    row-gap: 50px;
    padding: 30px 60px;
    height: auto;
  }

  .logo {
    width: 150px;
  }

  .detailWrap {
    position: static;
  }

  .subBtnWrap button {
    padding: 10px 20px;
    width: 200px;
    font-size: 15px;
  }

  .details {
    text-align: start;
    font-size: 13px;
  }
}
</style>
