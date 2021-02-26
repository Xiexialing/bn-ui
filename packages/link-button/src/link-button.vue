<template>
  <el-button type="text" v-bind="$attrs" @click="onClick" class="button-wrapper text-ellipsis">
      <slot/> <i class="bn bnskip"></i>
  </el-button>
</template>

<script>
  export default {
    name: "BnLinkButton",
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss">
  .button-wrapper{
    max-width: 100%;
  }
</style>
