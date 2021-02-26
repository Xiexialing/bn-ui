<template>
  <div class="chart-legend" :style="{flexDirection: mode === 'horizontal' ? 'row' : 'column'}">
    <span v-for="(item, index) in data" :key="index" class="chart-legend-item">
      <i
        class="chart-legend__icon"
        :class="item.type ? item.type : item.icon"
        :style="item.iconStyle"
      ></i>
      <span class="chart-legend__text" :style="item.textStyle">{{item.label}}</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: "BnChartLegend",
    props: {
      mode: {
        type: String,
        default: 'vertical',
        validator(val) {
          return ['horizontal', 'vertical'].includes(val)
        }
      },
      data: {
        type: Array,
        default() {
          return [
            {
              // type: 'circle',
              icon: 'el-icon-platform-eleme',
              label: '正常',
              iconStyle: {
                color: '#1348cc',
                // backgroundColor: '#1348cc',
              },
              textStyle: {}
            }, {
              // type: 'circle',
              icon: 'el-icon-user-solid',
              label: '异常',
              iconStyle: {
                color: 'rgb(221, 48, 51)',
                // backgroundColor: 'rgb(221, 48, 51)',
              },
              textStyle: {}
            }
          ]
        }
      }
    },
    computed: {}
  }
</script>
<style lang='scss' scoped>
  .chart-legend {
    display: flex;
    justify-content: space-around;
    height: inherit;
    font-size: 0;

    .chart-legend-item {
      display: flex;
      align-items: center;

      .chart-legend__icon {
        font-size: 24px;

        &.circle {
          display: inline-block;
          vertical-align: top;
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      }

      .chart-legend__text {
        display: inline-block;
        vertical-align: top;
        margin-left: 8px;
        font-size: 14px;
      }
    }
  }

</style>
