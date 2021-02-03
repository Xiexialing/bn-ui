<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <div class="bn-upload">
      <div class="upload-main">
        <bn-input :value="value" :disabled="disabled" @input="onInput" :placeholder="placeholder"/>
        <el-upload
          action
          v-bind="$attrs"
          :auto-upload="autoUpload"
          :show-file-list="showFileList"
          :on-change="onChange"
        >
          <bn-button class="el-upload__text" icon="el-icon-upload2">添加本地文件</bn-button>
        </el-upload>
      </div>
      <p class=" bn-upload--warning">
        <slot v-if="$slots.default"/>
        <span v-else>上传文件编码格式为utf-8</span>
      </p>
    </div>
  </el-form-item>
</template>

<script>
  export default {
    name: "BnUpload",
    props: {
      value: {
        type: String
      },
      label: {
        type: String,
      },
      prop: {
        type: String
      },
      'label-width': {
        type: String
      },
      disabled: {
        type: Boolean,
        default: true
      },
      autoUpload: {
        type: Boolean
      },
      showFileList: {
        type: Boolean
      },
      placeholder: {
        type: String,
        default: '上传的文件名'
      }
    },
    methods: {
      async readText(file) {
        // UTF-8,GBK,GB2312
        const readFile = new FileReader()
        readFile.onload = (e) => {
          this.$emit('change', e.target.result)
        }
        readFile.readAsText(file.raw)
      },
      onInput(val) {
        this.$emit('input', val)
      },
      onChange(file, fileList) {
        this.readText(file)
        this.$emit('input', file.name)
        if (fileList.length > 1) {
          fileList.splice(0, 1)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .bn-upload {
    .upload-main {
      display: flex;
    }
    .el-upload__text{
      margin-left: 3px;
    }
    .bn-upload--warning {
      font-size: 14px;
      color: #f90;
    }
  }

</style>
