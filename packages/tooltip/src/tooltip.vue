<template>
  <el-tooltip
    :effect="effect"
    :content="content"
    :placement="placement"
    class="text-ellipsis"
  >
    <template slot="content" v-if="$slots.content">
      <slot name="content"></slot>
    </template>
    <slot/>
  </el-tooltip>
</template>

<script>
  export default {
    name: "BnTooltip",
    props: {
      content: {
        type: String
      },
      placement: {
        type: String,
        default: 'top'
      },
      effect: {
        type: String,
        default: 'dark'
      }
    }
  }
</script>
