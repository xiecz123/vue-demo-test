<template>
  <div>
    <el-upload
      ref="upload"
      action
      :on-change="onChangeFile"
      :before-upload="beforeFileUpload"
      :show-file-list="false"
      :auto-upload="false"
    >
      <div style="display: flex">
        <el-input
          style="flex: 1; margin-right: 8px"
          disabled
          v-model="upload.data.fileName"
        ></el-input>
        <el-link slot="trigger" type="primary" :underline="false">
          选择文件
        </el-link>
      </div>
    </el-upload>
    <textarea v-model="textArea" rows="20" cols="50" />
    <button @click="getTextArea">
      获取文本框内的文字
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyUpload',
  data() {
    return {
      upload: {
        data: {
          fileName: null,
          file: null,
          type: 1,
        },
        rules: {
          fileName: [{ required: true, message: "请选择文件" }],
          type: [{ required: true, message: "请选择导入方式" }],
        },
        percentage: 0, // 进度百分比
        status: "init", // init：选择文件, loading：进行中, finish：结束
        countdown: 5, // 倒计时数
        result: {
          // 返回结果
          total: 0,
          success: 0,
          failure: 0,
          ids: [],
        },
        errorMessage: "",
      },
      textArea: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    getTextArea() {
      console.log(this.textArea);
    },
    onChangeFile(file) {
      // if (!this.beforeFileUpload(file.raw)) {
      //   return;
      // }
      this.upload.data.fileName = file.name;
      this.upload.data.file = file.raw;
      this.updateData();
    },

    /*
     * 上传前校验
     */
    beforeFileUpload(file) {
      // if (!file.name.endsWith(".json")) {
      //   this.fileNameErrorMessage = "请选择格式为.json的文件！";
      //   return false;
      // }
      if (file.size > 1 * 1024 * 1024) {
        this.fileNameErrorMessage = "文件大小不能超过1Mb！";
        return false;
      }
      this.fileNameErrorMessage = null;
      return true;
    },
    async updateData() {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          console.log(event.target.result);
          this.textArea = event.target.result;
          // try {
          //   const data = JSON.parse(event.target.result);
          //   if (typeof data !== "object") {
          //     throw new Error("json格式错误!");
          //   }
          //   this.$emit("import", data);
          //   resolve();
          // } catch (e) {
          //   this.$message.error("json格式错误！");
          //   reject(e);
          // }
        };
        const text = reader.readAsText(this.upload.data.file);
        console.log(text);
        resolve();
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
