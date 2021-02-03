<template>
  <bn-drawer :visible="visible" :submit="onSubmit" @close="onClose">
    <bn-table :columns="columns" :data-source="dataSource" :loading="loading"/>
  </bn-drawer>
</template>

<script>
  export default {
    name: "Drawer",
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        columns: [
          {prop: 'date', label: '日期', width: "150px"},
          {prop: 'name', label: '姓名', width: "150px"},
          {prop: 'address', label: '地址', width: "150px"}
        ],
        dataSource: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        loading: false
      }
    },
    methods: {
      onClose() {
        this.$emit('update:visible', false)
      },
      async onSubmit() {
         await new Promise(reject => {
           setTimeout(()=>{
             reject()
           },500)
         })
      }
    }
  }
</script>

<style scoped>

</style>
