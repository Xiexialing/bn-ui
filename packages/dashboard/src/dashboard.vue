<template>
    <v-charts :options="dashboardOptions" autoresize></v-charts>
</template>

<script>
  import _ from 'lodash';
  import ECharts from "vue-echarts";
  import 'echarts/lib/chart/gauge';
  import "echarts/lib/component/tooltip";
  import "echarts/lib/component/legend";
  import "echarts/lib/component/markPoint";
  import "echarts/lib/component/markLine";
  import 'echarts/lib/component/title';

  const SERIES_ITEM = {
    type: 'gauge',
    startAngle: 180,
    endAngle: 0,
    min: 0,
    max: 100,
    splitNumber: 10,
    itemStyle: {
      color: '#58D9F9',
      shadowColor: 'rgba(0,138,255,0.45)',
      shadowBlur: 10,
      shadowOffsetX: 2,
      shadowOffsetY: 2,
    },
    progress: {
      show: true,
      roundCap: true,
      width: 16
    },
    pointer: {  // 指针
      icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
      length: '75%',
      width: 12,
      offsetCenter: [0, '5%']
    },
    axisLine: {  // 圆弧
      roundCap: true,
      lineStyle: {
        width: 16
      }
    },
    axisTick: {   // 小刻度
      show: false
    },
    splitLine: {  // 大刻度
      length: 10,
      lineStyle: {
        width: 2,
        color: '#999',
        fontSize: 10,
      }
    },
    axisLabel: {  // 刻度上面的数据
      distance: 25,
      color: '#999',
      fontSize: 12
    },
    detail: {
      formatter: function (value) {
        return '{value|' +'总量\n' + value + '}';
      },
      lineHeight: 24,
      offsetCenter: [0, '25%'],
      valueAnimation: true,
      rich: {
        value: {
          fontSize: 16,
          color: '#777'
        }
      }
    }
  }

  export default {
    name: 'BocDashboard',
    props: {
      options: {
        type: Object
      }
    },
    computed: {
      dashboardOptions() {
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
          legend: {
            show: false,
            bottom: orient !== 'vertical' && !top && !bottom ? '6px' : 'auto',
            left: orient !== 'vertical' && !right && !left ? 'center' : 'auto',
            icon: 'diamond',
            data: series.map(({name}) => name)
          },
          tooltip: {
            trigger: 'item'
          }
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
