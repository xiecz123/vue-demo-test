<template>
  <father-component type="text" text="outText" msg="outMsg" />
</template>

<script>
import FatherComponent from "./FatherComponent";
export default {
  name: "InheritAttrsComponent",
  components: {
    FatherComponent,
  },
  methods: {},
};
</script>

<style scoped></style>
