<template>
  <div id="app">
    <div class="left">
      <router-link v-for="{path} in components" :to="path" :key="path">{{path}}</router-link>
      <router-link to="/">返回主页</router-link>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import components from './components'
export default {
  name: "App",
  data() {
    return {
      components
    }
  },
  methods: {
    handleNodeClick(val) {
      console.log("out handleNodeClick", val);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
.left {
  width: 200px;
  display: flex;
  flex-direction: column;
}
.right {
  flex: 1;
}
</style>
