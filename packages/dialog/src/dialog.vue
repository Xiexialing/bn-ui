<template>
  <el-dialog
    v-bind="$attrs"
    :title="title"
    :width="width"
    :visible.sync="visibleFlag"
    :close-on-click-modal="closeOnClickModal"
    :appendToBody="appendToBody"
    @close="onCancel"
    class="dialog-wrapper"
  >
    <el-form :model="model" :rules="rules" ref="formRef" @submit.native.prevent :label-width="labelWidth">
      <slot/>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <boc-cancel-button @click="onCancel" size="small">取 消</boc-cancel-button>
      <el-button type="primary" @click="onConfirm" size="small" :loading="loading">确 定</el-button>
    </div>
  </el-dialog>

</template>

<script>
  export default {
    name: "BocDialog",
    props: {
      title: {
        type: String,
        default: '模态框'
      },
      width: {
        type: String,
        default: '640px'
      },
      visible: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        type: Boolean,
        default: false
      },
      appendToBody: {
        type: Boolean,
        default: true
      },
      model: {
        type: Object,
        default() {
          return {}
        }
      },
      rules: {
        type: Object
      },
      submit: {
        type: Function
      },
      labelWidth: {
        type: String,
        default: '100px'
      }
    },
    data() {
      return {
        loading: false,
        visibleFlag: true
      }
    },
    watch: {
      visible() {
        const {visibleFlag, visible} = this
        if (visibleFlag !== visible) {
          this.visibleFlag = visible
        }
      }
    },
    methods: {
      onConfirm() {
        this.$refs.formRef.validate(async valid => {
          if (valid) {
            this.loading = true
            await this.submit()
            this.onCancel()
          }
        })
      },
      onCancel() {
        this.visibleFlag = false
        setTimeout(() => {
          this.$emit('close', false)
        }, 500)
      }
    }
  }
</script>

<style lang="scss">
  .dialog-wrapper {
    .el-dialog__header {
      color: #ccc;
      background: #f7f7f7;
    }

    .el-dialog__title {
      font-size: 14px;
      font-weight: 700;
    }

    .el-dialog__footer {
      padding: 12px;
      border-top: 1px solid #d7dae2;
    }
  }
</style>
