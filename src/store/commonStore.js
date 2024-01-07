import router from "@/routes";

const commonStore = {
  namespaced: true,
  state: {
    alret: {
      show: false,
      type: "",
      text: "안내팝업 문구입니다.",
    },
    loading: false,
    // (0.8 + 딜레이(0.1)) * 2
    curtain: {
      show: false,
      time: 1800,
    },
    navActive: false,
    browserWidth: null,
  },
  mutations: {
    // alret창 세팅
    SET_ALRET(state, alretData) {
      const { type, text } = alretData;

      state.alret.show = true;
      state.alret.type = type;

      if (type === "error" && !text) {
        state.alret.text = "에러가 발생했습니다.";
        return;
      }

      if (type === "success" && !text) {
        state.alret.text = "실행에 성공하셨습니다.";
        return;
      }

      if (type === "delete" && !text) {
        state.alret.text = "삭제가 완료되었습니다.";
        return;
      }

      state.alret.text = text;
    },
    // alret 창 닫기
    CLOSE_ALRET(state) {
      state.alret.show = false;
      state.alret.text = "안내팝업 문구입니다.";
      state.alret.type = "";
    },
    // loading창 세팅
    SET_LOADING(state, value) {
      state.loading = value;
    },
    // 페이지 커튼효과 open
    OPEN_CURTAIN(state, data) {
      const { path, time } = data;
      if (time) state.curtain.time = time; //시간이 정해져 있는 경우에만
      state.curtain.show = true;

      // 경로가 있는 경우에만
      if (path) {
        setTimeout(() => {
          router.replace(path);
        }, state.curtain.time / 2);
      }
    },
    // 페이지 커튼효과 close
    CLOSE_CURTAIN(state) {
      state.curtain.show = false;
    },
    // navigation 효과 제어
    SET_NAV(state) {
      state.navActive = !state.navActive;
    },
    //  브라우저 넓이 세팅
    SET_BROWSER_WIDTH(state, width) {
      state.browserWidth = width;
    },
  },
  actions: {},
};

export default commonStore;
