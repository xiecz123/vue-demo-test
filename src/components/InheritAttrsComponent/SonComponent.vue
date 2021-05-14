<template>
  <input type="date" class="border-red input-width" />
</template>

<script>
export default {
  name: 'SonComponent',
  props: {
    config: Object,
    text: String,
  },
  data() {
    return {};
  },
  watch: {
    config: function(val) {
      if (val) {
        val;
      }
    },
  },
  created() {},
  mounted() {
    // console.log("this", this);
    console.log("this.$attrs", this.$attrs);
    console.log("this.$listeners", this.$listeners);
    // console.log("this.$listeners", this.$listeners["node-click"]);
  },
  methods: {
    handleClick() {
      this.$emit("node-click", 123);
      if (this.$listeners["node-click"]) {
        // 不加判断的话，如果父组件没有绑定相应事件，调用相应事件会报错
        this.$listeners["node-click"](666);
      }
      // this.$emit 相当于 this.$listeners 的语法糖
      // this.$emit = function(event, payload) {
      //   if (this.$listeners[event]) {
      //     return this.$listeners[event](payload)
      //   }
      // }
    },
  },
};
</script>

<style scoped>
.border-red {
  border: 1px solid #ff0000;
}
.input-width {
  width: 200px;
}
</style>
