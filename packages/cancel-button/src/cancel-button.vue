<template>
  <el-button :type="type" v-bind="$attrs" @click="onClick" :plain="plain">
    <template v-if="$slots.default">
      <slot/>
    </template>
    <template v-else>
      取 消
    </template>
  </el-button>
</template>

<script>
  export default {
    name: "BocCancelButton",
    props: {
      type: {
        type: String,
        default: 'default',
        validator: function (value) {
          return ['primary', 'default', 'success', 'warning', 'danger', 'info', 'text'].indexOf(value) !== -1;
        }
      },
      plain: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped>

</style>
