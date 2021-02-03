<template>
  <div id="app">
<!--     <Form/>-->
<!--    <TableList/>-->
    <!--    <VData/>-->
    <!--    <Notice/>-->
 <Others/>
    <!--    <router-view/>-->
  </div>
</template>

<script>
  import Form from './demos/form/Form'
  import TableList from './demos/table/table-list'
  import VData from './demos/data/Vdata'
  import Notice from './demos/notice/notice'
  import Navigation from './demos/navigation/Navigation'
  import Others from './demos/others/index'

  export default {
    name: 'App',
    components: {
      Form,
      TableList,
      VData,
      Notice,
      Navigation,
      Others
    }
  }
</script>
<style lang="scss">
  #app {
    margin: 0 auto;
    padding-top: 20px;
    width: 1200px;
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>
