// import Layout from "@/views/Layout";

// const _import_ = file => () => import("@/views/" + file + ".vue");
/**
 * 静态路由表配置
 *
 * 可根据{role}字段来模拟权限访问. 用户登录后必须含有{role}字段, 与之匹配的路由会被最终过滤出来供访问.
 * 不匹配的则不会包含在内.
 * 具体字段表说明可以访问平台文档查看详细资料.
 */
export const aysncRoutesMap = [
  // {
  //   path: "/msg",
  //   component: Layout,
  //   meta: { title: "资讯", icon: "fdddfont icon-material", role: ["admin"] },
  //   children: [
  //     {
  //       path: "msg-management",
  //       name: "MaterialManage",
  //       component: _import_("Material/MaterialManage/index"),
  //       meta: { title: "素材管理", icon: "fdddfont icon-duosucai" }
  //     },
  //     {
  //       path: "msg-check",
  //       name: "MaterialCheck",
  //       component: _import_("Material/MaterialCheck/index"),
  //       meta: { title: "素材审核", icon: "fdddfont icon-shenhe" }
  //     }
  //   ]
  // }
];
