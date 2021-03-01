<template>
  <div style="width: 400px;">
    <figure style="width: 400px; height: 300px;">
      <bn-pie :options="options"/>
    </figure>
    <figure style="width: 400px; height: 300px;">
      <bn-line :options="options2"/>
    </figure>
    <figure style="width: 400px; height: 300px;">
      <bn-bar :options="options3"/>
    </figure>
    <figure style="width: 400px; height: 300px;">
      <bn-dashboard :options="options4"/>
    </figure>
    <figure style="width: 100px; ">
      <bn-liquid :options="options5"/>
    </figure>
    <figure style="width: 400px; height: 300px;">
      <bn-ratio :options="options6"/>
    </figure>
    <figure style="width: 300px; height: 200px;">
      <bn-chart-legend/>
    </figure>
  </div>
</template>

<script>
  const detail = {
    "registry": {
      "totalCount": 179,
      "safeCount": 4,
      "unSafeCount": 1,
      "unScanCount": 172,
      "failCount": 2
    },
    "harbor": {
      "safeCount": 0,
      "totalCount": 0,
      "failCount": 0,
      "unSafeCount": 0,
      "unScanCount": 0
    }
  }


  export default {
    data() {
      return {
        options: {
          title: {
            text: '分配量'
          },
          series: [
            {
              label: {
                formatter: [
                  `{b|3}`,
                  '{a|总量}'
                ].join('\n'),
              },
              data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
              ]
            }
          ]
        },
        options2: {
          title: {
            text: '折线图堆叠'
          },
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          series: [
            {
              name: 'dad',
              data: [120, 200, 150, 80, 70, 110, 130],
            }
          ]
        },
        options3: {
          title: {
            text: '柱状图堆叠'
          },
          xAxis: {
            data: ['已扫描', '未扫描', '扫描失败']
          },
          series: [
            {
              name: '安全',
              stack: 'one',
              data: [120, 200, 150, 80, 70, 110, 130],
            },
            {
              name: '不安全',
              stack: 'one',
              data: [120, 200, 150, 80, 70, 110, 130],
            },
            {
              name: '未扫描',
              stack: 'tow',
              data: [120, 200, 150, 80, 70, 110, 130],
            },
            {
              name: '扫描失败',
              stack: 'three',
              data: [120, 200, 150, 80, 70, 110, 130],
            }
          ]
        },
        options4: {
          label: '内存使用量',

          series: [
            {
              data: [{value: 50}]
            }
          ]
        },
        options5: {
          series: {
            data: 3.98,
          },
          title: 'CPU使用量',
        },
        options6: {
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
  }
</script>
