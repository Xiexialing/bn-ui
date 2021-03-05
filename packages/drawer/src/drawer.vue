<template>
  <el-drawer
    class="drawer-wrapper"
    v-bind="$attrs"
    :visible="drawerVisible"
    :direction="direction"
    :append-to-body="appendToBody"
    :wrapperClosable="wrapperClosable"
    @close="onCancel"
  >
    <el-form :model="model" :rules="rules" ref="formRef" @submit.native.prevent :label-width="labelWidth">
      <slot/>
    </el-form>
    <div class="drawer__footer">
      <boc-cancel-button @click="onCancel">取 消</boc-cancel-button>
      <boc-button @click="onConfirm" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</boc-button>
    </div>
  </el-drawer>
</template>

<script>
  export default {
    name: "BocDrawer",
    props: {
      visible: {
        type: Boolean
      },
      appendToBody: {
        type: Boolean,
        default: true
      },
      wrapperClosable: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: 'rtl'
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
        drawerVisible: true,
        loading: false
      }
    },
    watch: {
      visible() {
        const {visible} = this
        if(visible) {
          this.drawerVisible = visible
        }
      }
    },
    methods: {
      onCancel() {
        this.drawerVisible = false
        setTimeout(() => {
          this.$emit('close', false)
        }, 500)
      },
      onConfirm() {
        this.$refs.formRef.validate(async valid => {
          console.log(111)
          if (valid) {
            this.loading = true
            await this.submit()
            this.onCancel()
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  .drawer-wrapper {
    .drawer__footer {
      width: 100%;
      position: absolute;
      bottom: 40px;
      right: 20px;
      text-align: right;
    }
  }
</style>
