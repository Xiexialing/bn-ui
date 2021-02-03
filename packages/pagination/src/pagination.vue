<template>
  <div class="pagination-wrapper">
    <el-pagination
      v-bind="$attrs"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      @prev-click="onPrevClick"
      @next-click="onNextClick"
      :current-page="current"
      :page-sizes="pageSizes"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "BnPagination",
    props: {
      current: {
        type: Number,
        default: 1
      },
      size: {
        type: Number,
        default: 10
      },
      total: {
        type: Number,
        default: 0
      },
      'page-sizes': {
        type: Array,
        default() {
          return [10, 20, 30, 40]
        }
      }
    },
    methods: {
      onSizeChange(size) {
        this.$emit('update:current', 1)
        this.$emit('update:size', size)
        this.$emit('change')
      },
      onCurrentChange(page) {
        this.$emit('update:current', page)
        this.$emit('change')
      },
      onPrevClick() {
        this.$emit('update:current', page)
        this.$emit('change')
      },
      onNextClick() {
        this.$emit('update:current', page)
        this.$emit('change')
      }
    }
  }
</script>

<style scoped>
  .pagination-wrapper {
    margin: 12px 0;
    padding-right: 12px;
    text-align: right;
  }
</style>
