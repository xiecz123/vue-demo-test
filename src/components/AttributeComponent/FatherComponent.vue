<template>
  <div class="hello">
    <son-component
      v-bind="$attrs"
      v-on="$listeners"
      @node-click="handleNodeClick"
      text="innerText"
      msg="innerMsg"
    />
  </div>
</template>

<script>
import SonComponent from "./SonComponent";
export default {
  name: "FatherComponent",
  components: {
    SonComponent,
  },
  props: {
    // msg: String
  },
  methods: {
    handleNodeClick(val) {
      console.log("inner handleNodeClick", val);
    },
  },
};
</script>

<style scoped></style>
