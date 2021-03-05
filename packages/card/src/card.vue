<template>
  <el-card
    v-bind="$attrs"
    class="card-wrapper"
    :header="header"
    :shadow="shadow"
  >
    <div slot="header" class="card__header" v-if="$slots.header">
      <slot name="header"/>
    </div>
    <slot/>
  </el-card>
</template>

<script>
  export default {
    name: "BocCard",
    props: {
      header: {
        type: String
      },
      shadow: {
        type: String,
        default: "hover"
      }
    },
    methods: {
      onInput(val) {
        this.$emit('input', val)
      },
      onChange(val) {
        this.$emit('change', val)
      }
    }
  }
</script>

<style lang="scss">
  .card-wrapper {
    .el-card__header{
      padding: 10px 20px;
      font-size: 14px;
    }
    .card__header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .el-button--medium {
        padding: 1px 0;
      }
    }
  }
</style>
