<template>
  <div class="ratio">
    <div class="ratio-label">
      <span>{{options.name}}</span>
      <span>{{ options.series.data.map(({value}) => value || 0).join(' / ') }}</span>
    </div>
    <div
      class="ratio__horizontal"
      :style="{height: height + 'px'}"
    >
      <template v-if="total !== 0">
        <i
          v-for="(item, index) in data"
          :key="index"
          :style="{width: (item.value / total * 100)+'%',backgroundColor: item.bgColor}"
        />
      </template>
      <i
        v-else
        :style="{backgroundColor: '#d1d3d3', width: '100%'}"
      />
    </div>
  </div>
</template>

<script>
  const defaultDataProp = [
    {
      bgColor: 'rgb(19, 72, 204)'
    }, {
      bgColor: 'rgb(221, 48, 51)'
    }
  ]

  export default {
    name: "BocRatio",
    props: {
      height: { // 横向条的高度
        type: Number,
        default: 12
      },
      options: {
        type: Object,
        default() {
          return {
            name: 'master',
            series: {
              data: [
                {
                  value: 1,
                }, {
                  value: 0,
                }
              ]
            }
          }
        }
      }
    },
    computed: {
      total() {
        const {data} = this.options.series
        return data.reduce((total, item) => total + item.value, 0)
      },
      data() {
        const {data} = this.options.series
        return data.map((item, index) => ({
          ...defaultDataProp[index],
          ...item,
        })).filter(({value}) => value)
      }
    }
  }
</script>
<style lang='scss' scoped>
  .ratio {
    .ratio-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .ratio__horizontal {
      font-size: 0;

      i {
        display: inline-block;
        height: inherit;

        &:first-child {
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }

        &:last-child {
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      }
    }
  }

</style>
