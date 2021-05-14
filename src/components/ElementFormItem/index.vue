<template>
  <div>
    <el-form ref="searchForm" :model="formData">
      <template v-if="loginType === 'mode1'">
        <label>模式一</label>
        <el-form-item prop="fstartDate1">
          <input v-model="formData.fstartDate1" />
        </el-form-item>
        <el-form-item prop="fstartDate2">
          <input v-model="formData.fstartDate2" />
        </el-form-item>
        <el-form-item prop="fstartDate3">
          <input v-model="formData.fstartDate3" />
        </el-form-item>
      </template>
      <template v-else>
        <label>模式二</label>
        <el-form-item prop="fstartDate4">
          <!-- <input v-model="formData.fstartDate4" /> -->
          <el-select v-model="formData.fstartDate4">
            <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="fstartDate5">
          <!-- <input v-model="formData.fstartDate5" /> -->
          <el-select v-model="formData.fstartDate5">
            <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="fstartDate6">
          <!-- <input v-model="formData.fstartDate6" /> -->
          <el-select v-model="formData.fstartDate6">
            <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
      </template>
    </el-form>
    <button @click="toggle">切换模式</button>
    <button @click="$refs.searchForm.resetFields()">重置</button>
  </div>
</template>

<script>
// 点击切换模式的时候，通过v-if切换显示的模式，但是<el-form-item/>会被复用，从而不会再次触发el-form-item中的mounted生命周期函数
// 从而导致重置方法出现问题
// 疑问：vue是如何判断<el-form-item/>可以复用的
export default {
  name: 'ElementFormItem',
  data() {
    return {
      loginType: "mode1",
      formData: {
        fstartDate1: "1",
        fstartDate2: "2",
        fstartDate3: "3",
        fstartDate4: "4",
        fstartDate5: "5",
        fstartDate6: "6",
      },
      options: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5",
          label: "5",
        },
        {
          value: "6",
          label: "6",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    toggle() {
      this.loginType = this.loginType === "mode1" ? "mode2" : "mode1";
    },
  },
};
</script>

<style lang="scss" scoped></style>
