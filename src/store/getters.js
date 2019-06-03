const getters = {
  // 平台属性
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // 设置属性
  showSettings: state => state.settings.showSettings,
  fixedHeader: state => state.settings.fixedHeader,
  sidebarLogo: state => state.settings.sidebarLogo,
  // 用户属性
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
};
export default getters;
