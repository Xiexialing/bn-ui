<template>
  <v-charts :options="pieOptions" autoresize></v-charts>
</template>

<script>
  import ECharts from "vue-echarts";
  import _ from 'lodash';
  import "echarts/lib/chart/pie";
  import "echarts/lib/component/tooltip";
  import "echarts/lib/component/legend";
  import "echarts/lib/component/markPoint";
  import "echarts/lib/component/markLine";
  import 'echarts/lib/component/title';

  const SERIES_ITEM = {
    name: '',
    type: 'pie',
    radius: ['67%', '82%'],
    center: ['50%', '50%'],
    avoidLabelOverlap: false,
    itemStyle: {
      borderRadius: 3,
      borderColor: '#fff',
      borderWidth: 2
    },
    label: {              // 默认显示的统计数据
      show: true,
      position: 'center',
      formatter: [
        '{b}: {d}',
      ].join('\n'),
      color: '#393b3e',
      fontSize: '14',
      rich: {
        a: {
          color: '#393b3e',
          fontSize: 16,
        },
        b: {
          fontSize: 22,
          color: '#393b3e',
        }
      },
    },
    labelLine: {   // 每个小块标题到图形的线条
      show: false  // 没有线条
    }
  }

  export default {
    name: "BnPie",
    props: {
      options: {
        type: Object
      }
    },
    computed: {
      pieOptions() {
        const {options} = this
        const {series, legend = {}} = options
        const {orient, left, right, top, bottom} = legend
        options.series = series.map(ser => _.merge(SERIES_ITEM, ser))  // 设置默认的series配置
        return _.merge({
          title: {
            left: 'center',
            textStyle: {
              fontWeight: 'normal',
              fontSize: 16
            }
          },
          tooltip: {trigger: 'item'},       // 滑动tooltip效果
          legend: {                         // 导航
            show: false,
            bottom: orient !== 'vertical' && !top && !bottom ? '6px' : 'auto',
            left: orient !== 'vertical' && !right && !left ? 'center' : 'auto',
            icon: 'diamond'
          }
        }, options)
      }
    },
    components: {
      'v-charts': ECharts
    }
  }
</script>
