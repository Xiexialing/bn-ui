<template>
  <boc-dialog :visible="visible" @close="onClose" :model="form" :rules="rules" :submit="onSubmit">
    <boc-input prop="name" label="用户名称" v-model="form.name"/>
    <boc-input prop="region" label="区域" v-model="form.region"/>
  </boc-dialog>
</template>

<script>
  export default {
    name: "AddUserDialog",
    props: {
      visible: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        form: {
          name: '',
          region: ''
        },
        rules: {
          name: [{required: true, message: '请输入活动名称', trigger: 'blur'}],
          region: [{required: true, message: '请选择活动区域', trigger: 'blur'}]
        }
      }
    },
    methods: {
      onClose() {
        this.$emit('update:visible', false)
      },
      async onSubmit() {
        await new Promise(resolve => {
          setTimeout(() => {
            resolve()
          }, 2000)
        })
      }
    }
  }
</script>

