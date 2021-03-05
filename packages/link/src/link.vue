<template>
  <el-link
    v-bind="$attrs"
    :type="type"
    :underline="underline"
    @click="onClick"
    class="link-wrapper"
  >
    <slot/>
  </el-link>
</template>

<script>
  export default {
    name: "BocLink",
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      underline: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss">
  .link-wrapper{
    max-width: 100%;
    .el-link--inner{
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
