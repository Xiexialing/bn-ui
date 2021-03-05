<template>
  <el-collapse
    v-bind="$attrs"
    :value="value"
    @input="onInput"
    @change="onChange"
  >
    <el-collapse-item v-for="(item, index) in data"
                      :key="index"
                      :title="item.title"
                      :name="index + 1 + ''">
      <div>{{item.content}}</div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  export default {
    name: "BocCollapse",
    props: {
      value: {
        type: String | Number,
        default: '1'
      },
      data: {
        type: Array
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

<style scoped>

</style>
