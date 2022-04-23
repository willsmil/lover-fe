<template>
<div class="app">
  <el-row :span=2 class="header">
    <span>顶部导航</span>
  </el-row>
  <el-col :span=2 class="side-navbar">
     <el-menu
        :default-active="this.$route.path"
        background-color="#545c64"
        text-color="#fff"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        active-text-color="#ffd04b"
        router mode="horizontal"
      >
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span> {{ item.navItem }} </span>
        </template>
      </el-menu-item>
      </el-menu>
  </el-col>
  <router-view class="menu-right"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        { name: '/', navItem: '主页' },
        { name: '/profile', navItem: '个人' },
        { name: '/album', navItem: '相册' }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.header {
  height: 40px;
  background-color: #545c64;
  line-height: 40px;
}
.side-navbar {
  background-color: #545c64;
  height: 100%;
  margin-bottom: 0px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.app {
  height: 100%;
}
html, body, #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  height: 100%;
}
.menu-right {
  margin-left: 250px;
}
</style>
