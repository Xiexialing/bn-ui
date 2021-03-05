<template>
  <div>
    <el-table
      :data="dataSource"
      v-bind="$attrs"
      :stripe="stripe"
      v-loading="loading"
      style="width: 100%"
      ref="tableRef"
      @select="(selection, row) => this.$emit('select', selection, row)"
      @select-all="(selection) => this.$emit('select-all', selection)"
      @selection-change="(selection) => this.$emit('selection-change', selection)"
      @cell-mouse-enter="(row, column, cell, event) => this.$emit('cell-mouse-enter', row, column, cell, event)"
      @cell-mouse-leave="(row, column, cell, event) => this.$emit('cell-mouse-leave', row, column, cell, event)"
      @cell-click="(row, column, cell, event) => this.$emit('cell-click', row, column, cell, event)"
      @cell-dblclick="(row, column, cell, event) => this.$emit('cell-dblclick', row, column, cell, event)"
      @row-click="(row, column, event) => this.$emit('row-click', row, column, event)"
      @row-contextmenu="(row, column, event) => this.$emit('row-contextmenu', row, column, event)"
      @row-dblclick="(row, column, event) => this.$emit('row-dblclick', row, column, event)"
      @header-click="(column, event) => this.$emit('header-click', column, event)"
      @header-contextmenu="(column, event) => this.$emit('header-contextmenu', column, event)"
      @sort-change="({ column, prop, order }) => this.$emit('sort-change', { column, prop, order })"
      @expand-change="(row, expandedRows) => this.$emit('expand-change', row, expandedRows)"
    >
      <template v-for="(column, index) in columns">
        <el-table-column
          v-if="!column.render && !column.actions || column.type"
          :key="index"
          v-bind="column"
          show-overflow-tooltip
        />
        <el-table-column
          v-else-if="column.render"
          :key="index"
          v-bind="column"
          show-overflow-tooltip
        >
          <template slot-scope="{row, $index}">
            <TableRender :row="row" :$index="$index" :render="column.render"/>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="index"
          v-bind="column"
          :width="columns.width || '100px'"
        >
          <template slot-scope="{row, $index}">
            <TableActions
              :actions="column.actions"
              :row="row"
              :$index="$index"
              :maxActions="column.maxActions"
              :icon="icon"
            />
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="pagination-wrapper">
      <el-pagination
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
        :page-sizes="[10, 20, 30, 40]"
        :current-page="current"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        v-if="!!total"
        :total="total"
      />
    </div>
  </div>
</template>

<script>
  import TableRender from './table-render'
  import TableActions from './table-actions'

  export default {
    name: 'BnTable',
    props: {
      columns: {
        type: Array
      },
      dataSource: {
        type: Array
      },
      size: {  // 每页数
        type: Number
      },
      icon: {   // 图标模式
        type: Boolean,
        default: true
      },
      current: {  // 当前页
        type: Number
      },
      total: {
        type: Number
      },
      loading: {
        type: Boolean,
        default: true
      },
      stripe: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onSizeChange(size) {
        this.$emit('update:current', 1)
        this.$emit('update:size', size)
        this.$emit('change')
      },
      onCurrentChange(current) {
        this.$emit('update:current', current)
        this.$emit('change')
      },
      getTableInstance() {
        return this.$refs.tableRef
      }
    },
    components: {
      TableRender,
      TableActions
    }
  }
</script>

<style scoped>
  .pagination-wrapper {
    padding: 12px;
    text-align: right;
  }
</style>
