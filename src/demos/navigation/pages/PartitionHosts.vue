<template>
    <boc-table
      :columns='columns'
      :data-source='dataSource'
      :size.sync='query.size'
      :current.sync='query.current'
      :total='total'
      :loading="loading"
      @change='onPageChange'
    />
</template>

<script>
import {partitionHosts} from './data'
const columns = [
  {
    label: '节点名称',
    prop: 'hostRealName'
  },
  {
    label: 'IP',
    prop: 'hostIp'
  },
  {
    label: '类型',
    prop: 'hostType'
  },
  {
    label: '状态',
    prop: 'hostStatus'
  },
  {
    label: '调度状态',
    prop: 'schedulingStatus'
  }
]

export default {
  name: 'PartitionHosts',
  data () {
    return {
      columns,
      dataSource: [],
      query: {
        size: 10,
        current: 1
      },
      total: 0,
      loading: true
    }
  },
  methods: {
    initPartitionHosts () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.dataSource = partitionHosts
        this.total = 3
      }, 500)
    },
    onPageChange () {
      console.log(this.query)
      this.initPartitionHosts()
    }
  },
  created () {
    console.log('PartitionHosts')
    this.initPartitionHosts()
  }
}
</script>

<style scoped>

</style>
