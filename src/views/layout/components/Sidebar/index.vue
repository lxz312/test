<template>
  <!-- http://element-cn.eleme.io/#/zh-CN/component/menu -->
  <el-menu
    mode="vertical"
    :default-active="$route.path"
    background-color="#333333"
    text-color="#dddddd"
    active-text-color="#ffffff"
  >
    <sidebar-item :routes="permissionRouters" />
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(["permissionRouters"]),
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
  background: #070ac096;
  min-height: 100%;
}
</style>
