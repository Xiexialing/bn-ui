<template>
  <el-button :type="type" v-bind="$attrs" @click="onClick">
    <template v-if="$slots.default">
      <slot/>
    </template>
    <template v-else>
      确 定
    </template>
  </el-button>
</template>

<script>
  export default {
    name: "BocButton",
    props: {
      type: {
        type: String,
        default: 'primary',
        validator: function (value) {
          return ['primary', 'default', 'success', 'warning', 'danger', 'info', 'text'].indexOf(value) !== -1;
        }
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
