<template>
    <father-component text="outText" @node-click="handleNodeClick" msg="outMsg" />
</template>

<script>

// 前提：有父子孙三个组件，父调用子，子调用孙，其中子组件添加 v-bind="$attrs" v-on="$listeners"

// 结论：
// 1、当父子组件中写入相同的属性，孙组件只能拿到子组件的属性
// 2、当父子组件中写入相同的事件，孙组件能同时拿到父子组件的事件，触发事件时，先触发子组件的事件在触发父组件的事件
import FatherComponent from "./FatherComponent";
export default {
  name: "AttributeComponent",
  components: {
    FatherComponent,
  },
  props: {
    // msg: String
  },
  methods: {
    handleNodeClick(val) {
      console.log("out handleNodeClick", val);
    },
  },
};
</script>

<style scoped></style>
