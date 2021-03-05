<template>
  <el-card>
    <el-page-header @back="goBack" :content="content">
      <template slot="title" v-if="$slots.title">
        <slot name="title"></slot>
      </template>
      <template slot="content" v-if="$slots.content">
        <slot name="content"></slot>
      </template>
    </el-page-header>
  </el-card>
</template>

<script>
  export default {
    name: "BocPageHeader",
    props: {
      content: {
        type: String,
        default: '详情'
      }
    },
    methods: {
      goBack() {
        this.$emit('back')
      }
    }
  }
</script>

<style scoped>

</style>
