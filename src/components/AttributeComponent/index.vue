<template>
    <father-component text="outText" @node-click="handleNodeClick" msg="outMsg" />
</template>

<script>
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
