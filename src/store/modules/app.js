/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";

// 有效期 1 天
const expires = 1;

const app = {
  state: {
    sidebar: {
      opened: false, // 默认展开（false是隐藏）
      withoutAnimation: false
    },
    device: "desktop",
    language: Cookies.get("language") || "en",
    size: Cookies.get("size") || "medium"
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = true;
      state.sidebar.withoutAnimation = false;
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      // 自适应触发
      Cookies.set("sidebarStatus", 1);
      state.sidebar.opened = true;
      state.sidebar.withoutAnimation = withoutAnimation;
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit("TOGGLE_SIDEBAR");
    }
  }
};

export default app;
