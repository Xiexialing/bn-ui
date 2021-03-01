<template>
    <v-charts :options="barOptions" autoresize></v-charts>
</template>

<script>
  import _ from 'lodash';
  import ECharts from "vue-echarts";
  import 'echarts/lib/chart/bar';
  import "echarts/lib/component/tooltip";
  import "echarts/lib/component/legend";
  import "echarts/lib/component/markPoint";
  import "echarts/lib/component/markLine";
  import 'echarts/lib/component/title';

  const SERIES_ITEM = {
    type: 'bar',
    barMaxWidth: 30
  }

  export default {
    name: 'BnBar',
    props: {
      options: {
        type: Object
      }
    },
    computed: {
      barOptions() {
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
            trigger: 'axis',
            axisPointer: {  //坐标轴指示器，坐标轴触发有效，
              type: 'shadow', //默认为line，line直线，cross十字准星，shadow阴影
            }
          },
          legend: {
            show: false,
            bottom: orient !== 'vertical' && !top && !bottom ? '6px' : 'auto',
            left: orient !== 'vertical' && !right && !left ? 'center' : 'auto',
            icon: 'diamond',
            data: series.map(({name}) => name)
          },
          xAxis: {
            type: 'category',
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
      }
    },
    components: {
      'v-charts': ECharts
    }
  }
</script>
