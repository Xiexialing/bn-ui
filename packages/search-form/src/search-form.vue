<template>
  <el-form
    ref="form"
    :label-width="labelWidth"
    :inline="inline"
    @submit.native.prevent
  >
    <slot :loading="loading" :onSubmit="onSubmit"/>
    <el-form-item v-if="!$slots.footer">
      <boc-button :loading="loading" type="default" plain icon="el-icon-search" @click="onSubmit">搜 索</boc-button>
    </el-form-item>
    <slot v-else name="footer" :loading="loading" :onSubmit="onSubmit"></slot>
  </el-form>
</template>

<script>
  export default {
    name: "BocSearchForm",
    props: {
      'label-width': {
        type: String,
        default: '100px'
      },
      submit: {
        type: Function
      },
      inline: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        loading: false
      }
    },
    provide() {
      return {
        onFormSearch: this.onSubmit
      }
    },
    methods: {
      async onSubmit() {
        this.loading = true
        await this.submit()
        this.loading = false
      },
      onCancel() {
        this.$emit('cancel')
      }
    }
  }
</script>

<style scoped>

</style>
