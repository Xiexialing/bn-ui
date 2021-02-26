<template>
  <el-button type="text" v-bind="$attrs" @click="onClick" class="button-wrapper text-ellipsis">
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
    name: "BnTextButton",
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
