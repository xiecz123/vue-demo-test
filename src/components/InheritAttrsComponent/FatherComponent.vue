<template>
  <son-component text="innerText" msg="innerMsg" type="button" />
</template>

<script>
// https://cn.vuejs.org/v2/guide/components-props.html#%E9%9D%9E-Prop-%E7%9A%84-Attribute
// 当孙子组件是父亲组件的根元素时，孙子组件的根元素（非组件）会获得爷爷组件传入的attribute，而不是父亲组件传入的attribute。
// 孙子组件的$attrs或者props属性会获得父亲组件传入的attribute，拿不到爷爷组件传入的attribute
//爷爷组件传入的attribute只能作为父亲组件的$attrs和props，或者给孙子组件的根元素（非组件）赋予属性
import SonComponent from "./SonComponent";
export default {
  name: "FatherComponent",
  // inheritAttrs: false,
  components: {
    SonComponent,
  },
  methods: {},
};
</script>

<style scoped></style>
