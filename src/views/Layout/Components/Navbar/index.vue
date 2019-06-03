<template>
  <div class="navbar">
    <!-- 控制菜单展开 -->
    <div class="hamburger-container" @click="toggleSideBar">
      <i v-if="!sidebar.opened" class="iconfont icon-yousuojin"></i>
      <i v-if="sidebar.opened" class="iconfont icon-zuosuojin"></i>
    </div>
    <!-- Breadcrumb 面包屑 -->
    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container">
        <div class="avatar-wrapper">
          <span class="user-avatar iconfont icon-yonghu"></span>
          <i class="el-icon-caret-bottom" />
          <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item><i class="iconfont icon-shouyeyong"></i>首页</el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item><i class="iconfont icon-github"></i>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item><i class="iconfont icon-wendang"></i>文档</el-dropdown-item>
          </a>
          <el-dropdown-item divided >
            <span  style="display:block;" @click="logout"><i class="iconfont icon-084tuichu"></i>退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
        
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "./Comp//Breadcrumb";

export default {
  name: "Navbar",
  components: {
    Breadcrumb
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    // 动态改变SideBar 的状态
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
    .iconfont {
      font-size: 20px;
      margin-left: 10px;
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;

        .user-avatar {
          cursor: pointer;
          font-size: 20px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
      .user-dropdown {
        .iconfont {
          padding-right: 8px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
