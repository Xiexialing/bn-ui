<template>
  <bn-tag
    v-bind="$attrs"
    @click="onClick"
    :style="style"
  >
    <slot v-if="$slots.default"/>
    <span v-else class="status-body">
      <template v-if="$attrs.label">
        <i :class="$attrs.icon"></i>
      <span class="status-label">{{$attrs.label}}</span>
      </template>
      <template v-else>
        <span>加载中...</span>
      </template>
    </span>
  </bn-tag>
</template>

<script>
  export default {
    name: "BnStatus",
    computed: {
      style() {
        const {background, color} = this.$attrs
        return `background-color: ${background}; color: ${color}`
      }
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped lang="scss">
  .status-body {
    display: flex;
    align-items: center;

    .status-label {
      margin-left: 3px;
    }
  }
</style>
