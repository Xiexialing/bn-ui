<template>
  <el-form
    v-bind="$attrs"
    ref="form"
    :label-width="labelWidth"
    @submit.native.prevent
  >
    <slot/>
    <el-form-item v-if="!$slots.footer">
      <bn-button :loading="loading" @click="onSubmit"/>
      <bn-cancel-button @click="onCancel"/>
    </el-form-item>
    <slot v-else name="footer" :loading="loading" :onSubmit="onSubmit"></slot>
  </el-form>
</template>

<script>
  export default {
    name: "BnForm",
    props: {
      'label-width': {
        type: String,
        default: '100px'
      },
      submit: {
        type: Function
      }
    },
    data() {
      return {
        loading: false
      }
    },
    provide () {
      return {
        onFormSubmit: this.onSubmit
      }
    },
    methods: {
      validateField(props, callback) {
        this.$refs.form.validateField(props, callback)
      },
      resetFields() {
        this.$refs.form.resetFields()
      },
      clearValidate(props) {
        this.$refs.form.resetFields(props)
      },
      onSubmit() {
        this.$refs.form.validate(async valid => {
          if (valid) {
            this.loading = true
            await this.submit()
            this.loading = false
          }
        })
      },
      onCancel() {
        this.$emit('cancel')
      }
    }
  }
</script>

<style scoped>

</style>
