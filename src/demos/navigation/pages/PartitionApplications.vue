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
import {partitionApplications} from './data'
const columns = [
  {
    label: '应用名称',
    prop: 'projectName'
  },
  {
    label: 'CPU使用量',
    prop: 'CPU'
  },
  {
    label: '内存使用量',
    prop: 'memory'
  },
  {
    label: '状态',
    prop: 'status'
  }
]

export default {
  name: 'PartitionApplications',
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
    initPartitionApplications () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.dataSource = partitionApplications
        this.total = 3
      }, 500)
    },
    onPageChange () {
      console.log(this.query)
      this.initPartitionApplications()
    }
  },
  mounted () {
    console.log('PartitionApplications')
    this.initPartitionApplications()
  }
}
</script>

<style scoped>

</style>
