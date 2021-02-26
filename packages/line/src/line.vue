<template>
  <figure>
    <v-charts :options="lineOptions" autoresize></v-charts>
  </figure>
</template>

<script>
  import _ from 'lodash';
  import 'echarts'
  import ECharts from "vue-echarts";
  import 'echarts/lib/chart/line';
  import "echarts/lib/component/tooltip";
  import "echarts/lib/component/legend";
  import "echarts/lib/component/markPoint";
  import "echarts/lib/component/markLine";
  import 'echarts/lib/component/title';

  const SERIES_ITEM = {
    type: 'line',
    smooth: true
  }

  export default {
    name: 'BnLine',
    props: {
      options: {
        type: Object
      }
    },
    computed: {
      lineOptions() {
        const {options} = this
        const {series, legend = {}} = options
        const {orient, left, right, top, bottom} = legend
        return _.merge({
          title: {
            left: 'center',
            textStyle: {
              fontWeight: 'normal',
              fontSize: 16
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            bottom: orient !== 'vertical' && !top && !bottom ? '6px' : 'auto',
            left: orient !== 'vertical' && !right && !left ? 'center' : 'auto',
            icon: 'diamond',
            data: series.map(({name}) => name)
          },
          xAxis: {
            type: 'category',
            boundaryGap: false
          },
          yAxis: {
            type: 'value'
          },
        }, options, {
          series: series.map(ser => ({
            ...SERIES_ITEM,
            ...ser
          }))
        })
      },
    },
    components: {
      'v-charts': ECharts
    }
  }
</script>
