<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div style="height: 50px"></div>
      <h2 class="title">欢迎进入考试计划管理系统</h2>
      <br />
      <h5
        class="text"
      >本系统使用springboot和nodejs开发，连接云端数据库统一管理，针对各类考生制定专业课程培养计划，制定每次考试的考试计划。由教育部考试中心下发全国专业计划，各省再以此为基础，根据本地实际情况设置相应的专业计划和课程考试计划，新增加的专业计划和课程考试计划需要上报教育部考试中心审批。计划管理子系统包括专业计划管理、考次考点管理、专业申报管理和考试计划管理四个模块。并且添加了用户权限管理系统，为每个使用者分配权限，方便维护和管理系统。</h5>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "dashboard",
  computed: {
    ...mapGetters(["permissionCodeList"]),
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.title {
  text-align: center;
  color: #0a06e4;
}
.text {
  // text-align: center;
  color: #000000;
}
</style>
