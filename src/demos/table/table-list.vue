<template>
  <div>
    <bn-table
      :columns="columns"
      :dataSource="dataSource"
      :size.sync="query.size"
      :current.sync="query.current"
      :total="total"
      :loading="loading"
      @change="initPage"
      ref="tableRef"
      @select="onSelect"
      @select-all="onSelect"
    />
    <bn-button @click="onClick">按钮</bn-button>
  </div>
</template>

<script>
  import {ACTIONS_KEY_MAP} from '../../constants/actionsMap'
  import {statusUtils} from '../../utils/getStatus'
  export default {
    name: "tableList",
    data() {
      return {
        query: {
          size: 10,
          current: 1
        },
        loading: true,
        columns: [
          {
            type: 'selection',
            width: '50px'
          },
          {
            prop: 'projectName',
            label: '应用名称',
            render: (createElement, row) => {
              return createElement('bn-link-button', row.projectName)
            }
          },
          {
            prop: 'date',
            label: '日期',
          },
          {
            prop: 'status',
            label: '状态',
            render: (createElement, row) => {
              return createElement('bn-status', {
                attrs: {
                    ...statusUtils.cluster()
                }
              })
            }
          },
          {
            prop: 'name',
            label: '名字'
          },
          {
            prop: 'address',
            label: '地址',
            render: (createElement, row) => {
              return createElement('bn-text-button', row.address)
            }
          },
          {
            label: '操作',
            prop: 'address',
            actions: [
              {
                key: ACTIONS_KEY_MAP.EDIT,
                action(row, index) {
                  console.log(row, index)
                }
              },
              {
                key: ACTIONS_KEY_MAP.DEL,
                action: (row, index) => {
                  this.$Affirm({
                    name: row.name,
                    callback: async () => { // async 必须
                      // 添加执行删除的api
                      this.$Tip.success('删除成功')
                    }
                  })
                }
              },
              {
                key: ACTIONS_KEY_MAP.UPGRADE_IN_CLUSTER,
                action(row, index) {
                  console.log(row, index)
                }
              },
              {
                key: ACTIONS_KEY_MAP.CANCEL_MANAGEMENTIN_CLUSTER,
                action(row, index) {
                  console.log(row, index)
                }
              }
            ]
          }
        ],
        dataSource: [],
        total: 0
      }
    },
    methods: {
      initPage() {
        this.loading = true
        setTimeout(() => {
          this.dataSource = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => ({
            projectName: '我是应用' + index,
            date: '2016-05-04',
            name: '王小虎' + Math.floor(Math.random() * 100),
            address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1517 弄'
          }))
          this.loading = false
          this.total = Math.floor(Math.random() * 100) + 20
        }, 1500)
      },
      onClick() {
        this.$refs.tableRef.getTableInstance().toggleAllSelection()
      },
      onSelect(selection, row) {
        console.log(selection, row)
      }
    },
    mounted() {
      this.initPage()
    }
  }
</script>

<style scoped>

</style>
