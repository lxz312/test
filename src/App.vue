<template>
  <div id="app">
    <div class="back" />
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style lang="scss">
// normalize.css 样式格式化
@import "../node_modules/normalize.css/normalize.css";
// 全局自定义的css样式
@import "./styles/index.scss";

.back {
  z-index: -1;
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
