import Vue from "vue";
import Router from "vue-router";
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from "../views/layout/Layout";

const _import = require("./_import_" + process.env.NODE_ENV);

Vue.use(Router);

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noRedirect` will not redirect in the levelBar
 * noDropDown : if `noDropDown:true` will not has submenu in the sidebar
 * meta : `{ permission: ['a:xx'] }`  will control the page permission
 **/
export const constantRouterMap = [
  { path: "/login", component: _import("login/index"), hidden: true },
  { path: "/404", component: _import("errorPage/404"), hidden: true },
  { path: "/401", component: _import("errorPage/401"), hidden: true },
  {
    path: "",
    component: Layout,
    redirect: "dashboard",
    icon: "dashboard",
    noDropDown: true,
    children: [
      {
        path: "dashboard",
        name: "欢迎页",
        component: _import("dashboard/index"),
        meta: { title: "dashboard", noCache: true }
      }
    ]
  }
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  {
    path: "/account",
    component: Layout,
    redirect: "/account/detail",
    hidden: true,
    children: [
      {
        path: "detail",
        name: "账户中心",
        component: _import("account/detail")
      }
    ]
  },

  {
    path: "/account",
    component: Layout,
    redirect: "/account/list",
    icon: "role",
    name: "用户及权限管理",
    noDropDown: false,
    children: [
      {
        path: "role",
        name: "权限管理",
        component: _import("account/role"),
        meta: { permission: ["role:list"] }
      },
      {
        path: "list",
        name: "用户管理",
        component: _import("account/list"),
        meta: { permission: ["account:list"] }
      }
    ]
  },
  {
    path: "/major-course",
    component: Layout,
    redirect: "/major-course/list",
    icon: "role",
    noDropDown: false,
    name: "专业课程",
    children: [
      {
        path: "list",
        name: "设置专业课程",
        component: _import("major-course/list")
      },
      {
        path: "direction",
        name: "专业方向管理",
        component: _import("major-course/direction")
      }
    ]
  },
  {
    path: "/exam-set",
    component: Layout,
    redirect: "/exam-set/list",
    icon: "education",
    noDropDown: false,
    name: "考次管理",
    children: [
      {
        path: "list",
        name: "新增考次及日期",
        component: _import("exam-set/list")
      },
      {
        path: "course",
        name: "设置统考课表",
        component: _import("exam-set/course")
      }
    ]
  },
  {
    path: "/majorplan",
    component: Layout,
    redirect: "/majorplan/list",
    icon: "form",
    noDropDown: false,
    name: "专业计划",
    children: [
      {
        path: "list",
        name: "创建修改计划",
        component: _import("majorplan/list"),
        meta: { permission: ["role:list"] }
      },
      {
        hidden: true,
        path: "approve",
        name: "审核发布计划",
        component: _import("majorplan/approve"),
        meta: { permission: ["role:list"] }
      }
    ]
  },
  {
    path: "/major",
    component: Layout,
    redirect: "/major/list",
    icon: "chart",
    name: "专业管理",
    noDropDown: false,
    children: [
      {
        path: "list",
        name: "专业基本信息",
        component: _import("major/list")
      },
      {
        hidden: true,
        path: "detail",
        name: "专业情况",
        component: _import("major/detail")
      },
      {
        path: "category",
        name: "专业大类管理",
        component: _import("major/category")
      },
      {
        path: "nation",
        name: "维护全国专业",
        component: _import("major/nation")
      },
      {
        hidden: true,
        path: "school",
        name: "设置主考院校",
        component: _import("major/school")
      }
    ]
  },
  {
    path: "/course",
    component: Layout,
    redirect: "/course/list",
    icon: "role",
    noDropDown: false,
    name: "课程管理",
    children: [
      {
        path: "list",
        name: "省内课程信息",
        component: _import("course/list")
      },
      {
        path: "national",
        name: "维护全国课程",
        component: _import("course/national")
      },
      {
        path: "textbook",
        name: "维护课程教材",
        component: _import("course/textbook")
      },
      {
        path: "charge",
        name: "课程收费标准",
        component: _import("course/charge")
      },
      {
        path: "practice",
        name: "理论与实践对应",
        component: _import("course/practice")
      }
    ]
  },
  {
    path: "/approve",
    component: Layout,
    redirect: "/approve/list",
    icon: "role",
    noDropDown: false,
    name: "专业申报",
    children: [
      {
        path: "list",
        name: "专业申报管理",
        component: _import("approve/list")
        // meta: { permission: ['role:list'] }
      },
      {
        hidden: true,
        path: "detail",
        name: "申请表详情",
        component: _import("approve/detail")
      },
      {
        hidden: true,
        path: "check",
        name: "审核表",
        component: _import("approve/check")
      },
      {
        hidden: true,
        path: "selectmajor_list",
        name: "专业列表",
        component: _import("approve/selectmajor_list")
      },
      {
        hidden: true,
        path: "add_new",
        name: "新专业",
        component: _import("approve/add_new")
      },
      {
        hidden: true,
        path: "selectcourse_list",
        name: "调整专业课程",
        component: _import("approve/selectcourse_list")
      }
    ]
  },
  {
    path: "/exam-plan",
    component: Layout,
    redirect: "/exam-plan/list",
    icon: "role",
    noDropDown: false,
    name: "考试计划",
    children: [
      {
        path: "list",
        name: "考次对应专业",
        component: _import("exam-plan/list")
      },
      {
        path: "course",
        name: "设置开考课程",
        component: _import("exam-plan/course")
      },
      {
        path: "approve",
        name: "审核考试计划",
        component: _import("exam-plan/approve")
      }
    ]
  }
];
