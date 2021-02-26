<template>
  <div class="figure">
    <svg viewBox="0 0 100 100" class="liquid-chart">
      <defs>
        <clipPath :id="clipId">
          <circle
            cx="50"
            cy="50"
            :r="50 - strokeWidth - flowGap"
          />
        </clipPath>
        <linearGradient
          :id="yellowId"
          x1="0"
          y1="0"
          x2="0%"
          y2="100%"
        >
          <stop
            offset="0%"
            style="stop-color:rgba(255,153,0,1);"
          />
          <stop
            offset="100%"
            style="stop-color:rgba(255,205,0,1);"
          />
        </linearGradient>
        <linearGradient
          :id="greenId"
          x1="0"
          y1="0"
          x2="0%"
          y2="130%"
        >
          <stop
            offset="0%"
            style="stop-color:rgba(25,190,107,1);"
          />
          <stop
            offset="100%"
            style="stop-color:rgba(144,255,149,1);"
          />
        </linearGradient>
        <linearGradient
          :id="redId"
          x1="0"
          y1="0"
          x2="00%"
          y2="100%"
        >
          <stop
            offset="0%"
            style="stop-color:rgba(248,69,63,1);"
          />
          <stop
            offset="100%"
            style="stop-color:rgba(248,102,63,1);"
          />
        </linearGradient>
      </defs>
      <g
        :clip-path="`url(#${clipId})`"
        :fill="fillColor"
      >
        <g>
          <path
            :d="`M 0 ${pathCritical} Q 75 ${pathCritical-20}, 150 ${pathCritical} T 300 ${pathCritical} T 450 ${pathCritical} T 600 ${pathCritical} T 750 ${pathCritical} V 100 H 0 V 0`"/>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            from="0"
            to="-300"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </g>
        <g :fill="`url(#${liquidColor})`">
          <path
            :d="`M 0 ${pathCritical} Q 87.5 ${pathCritical-10}, 175 ${pathCritical} T 350 ${pathCritical} T 525 ${pathCritical} T 700 ${pathCritical} T 875 ${pathCritical} T 1050 ${pathCritical} V 100 H 0 V 0`"/>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            from="0"
            to="-350"
            dur="3s"
            repeatCount="indefinite"
          />
        </g>
      </g>
      <template
        v-for="(item, index) in chartData.circle"
      >
        <path
          :d="drawPath"
          stroke-linecap="square"
          :stroke="item.color"
          :stroke-width="strokeWidth"
          fill-opacity="0"
          :style="getPathStyle(index)"
        />
      </template>
    </svg>
    <div class="liquid-label">
      <p style="margin-top: 0;text-align:center;margin-bottom:-6px;">
        <span style="font-size:10px;">{{ options.title }}</span>
      </p>
      <p style="margin-top: 0;text-align:center;">
        <span style="font-size:20px;">{{ label }}</span><span style="font-size:10px;">%</span>
      </p>
    </div>
  </div>
</template>

<script>
  import shortid from 'shortid'

  export default {
    name: 'BnLiquid',
    props: {
      options: {
        type: Object,
        default() {
          return {
            series: {
              data: 3.98,
            },
            title: 'CPU使用量'
          }
        }
      },
      size: {
        type: Number,
        default: 100
      },
      strokeWidth: { // 边框的宽度
        type: Number,
        default: 6
      },
      flowGap: {  // 边框到水球的距离
        type: Number,
        default: 6
      },
      backgroundColor: {
        type: String,
        default: '#e9eaec'
      }
    },
    data() {
      return {
        clipId: shortid.generate(),
        redId: shortid.generate(),
        yellowId: shortid.generate(),
        greenId: shortid.generate(),
      }
    },
    computed: {
      fillColor() {
        const {color, series} = this.options
        const {data} = series
        return color || (data > 85 ? 'RGBA(248, 69, 63, .3)' : data <= 60 ? 'RGBA(25, 190, 107, .3)' : 'RGBA(255, 153, 0, .3)')
      },
      circleColor() {
        const {color, series} = this.options
        const {data} = series
        return color || (data > 85 ? 'RGBA(248, 69, 63)' : data <= 60 ? 'RGBA(25, 190, 107)' : 'RGBA(255, 153, 0)')
      },
      label() {
        const {series, label} = this.options
        const {data} = series
        return label || data || 0
      },
      liquidColor() {
        const {series} = this.options
        const {data} = series
        return data <= 60 ? this.greenId : data > 85 ? this.redId : this.yellowId
      },
      pathCritical() {
        const {series} = this.options
        const {data} = series
        return (100 - ((100 - 2 * (this.strokeWidth + this.flowGap)) * data
          / 100 + this.strokeWidth + this.flowGap)).toFixed(1)
      },
      drawPath() {
        const radius = 50 - this.strokeWidth / 2
        return `M 50,50 m 0,-${radius}
          a ${radius},${radius} 0 1 1 0,${2 * radius}
          a ${radius},${radius} 0 1 1 0,-${2 * radius}`
      },
      chartData() {
        const {backgroundColor, circleColor} = this
        const {series} = this.options
        const {data} = series
        const percent = parseFloat(data)
        return {
          circle: [
            {
              percent: (100 - percent) / 2,
              color: backgroundColor
            },
            {
              percent,
              color: circleColor
            },
            {
              percent: (100 - percent) / 2,
              color: backgroundColor
            }
          ]
        }
      }
    },
    methods: {
      getPathStyle(index) {
        const {strokeWidth} = this
        const {circle} = this.chartData
        const len = Math.PI * 2 * (50 - this.strokeWidth / 2)
        const x = circle.slice(index).reduce(((total, {percent}) => total + percent), 0)
        let offset = ((100 - x) / 100 * len)
        if (index === circle.length - 1) {
          offset += strokeWidth
        }
        return {
          'stroke-dasharray': `${(circle[index].percent / 100 * len)}px ${len}px`,
          'stroke-dashoffset': `-${offset}px`,
          'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .liquid-label {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
