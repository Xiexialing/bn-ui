<template>
  <div id="app">
<!--     <Form/>-->
<!--<TableList/>-->
    <!--    <VData/>-->
    <!--    <Notice/>-->
<!--<Others/>-->
    <Pie></Pie>
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
  import Pie from './demos/pie/index'

  export default {
    name: 'App',
    components: {
      Form,
      TableList,
      VData,
      Notice,
      Navigation,
      Others,
      Pie
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
