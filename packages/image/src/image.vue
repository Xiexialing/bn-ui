<template>
  <el-image
    style="width:100px;height:100px"
    v-bind="$attrs"
    :src="src"
    :fit="fit"
  ></el-image>
</template>

<script>
  export default {
    name: "BocImage",
    props: {
      fit: {
        type: String,
        default: 'fill'
      },
      src: {
        type: String,
      }
    }
  }
</script>
