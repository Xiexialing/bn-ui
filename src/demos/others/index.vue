<template>
  <div>
    <bn-button @click="onClick">新增</bn-button>
    <br/>
    <br/>
    <br/>
    <br/>
    <bn-tooltip content="111111">
      <bn-button>默认上边</bn-button>
    </bn-tooltip>
    <bn-popover content="这是一段内容,这是一段内容,这是一段内容,这是一段内容">
      <bn-table :columns="columns" :data-source="dataSource" :loading="loading"/>
      <el-button slot="reference">hover 激活</el-button>
    </bn-popover>
    <bn-popconfirm title="这是一段内容确定删除吗？">
      <bn-button>删除</bn-button>
    </bn-popconfirm>
    <bn-card header="卡片名称">
      <!--格式固定-->
      <template slot="header">
        <span>卡片名称</span>
        <div>
          <bn-text-button>操作按钮1</bn-text-button>
          <bn-text-button>操作按钮2</bn-text-button>
          <bn-text-button>操作按钮3</bn-text-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o">
        {{'列表内容 ' + o }}
      </div>
    </bn-card>
    <bn-collapse :data="collapse"/>
    <bn-list-card header="列表" :columns="listCardColumns" :dataSource="listCardDataSource"/>
    <bn-timeline :data="timeline"/>
    <bn-divider>
      少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉
    </bn-divider>
    <bn-divider>
      少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉
    </bn-divider>
    <bn-divider>
    </bn-divider>
    <bn-divider>
      <i class="el-icon-mobile-phone"></i>
    </bn-divider>
    <span>雨纷纷</span>
    <bn-divider direction="vertical"></bn-divider>
    <span>旧故里</span>
    <bn-divider direction="vertical"></bn-divider>
    <span>草木深</span>
    <bn-calendar :range="['2019-03-04', '2019-03-24']" v-model="value"/>
    <bn-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              :preview-src-list="srcList"
    />
    <bn-button @click="drawerVisible = true">打开抽屉</bn-button>
    <Drawer :visible.sync="drawerVisible" v-if="drawerVisible"/>
    <AddUserDialog :visible.sync="visible" v-if="visible"/>
  </div>
</template>

<script>
  import Drawer from './drawers/Drawer'
  import AddUserDialog from './dialogs/AddUserDialog'

  const listCardColumns = [
    {
      label: '基本信息',
      children: [
        {
          label: '名称',
          filedName: 'name'
        },
        {
          label: '应用',
          filedName: 'applicationName',
          render: (createElement, data) => {
            return createElement('bn-link', 'dasda-dasdasd')
          }
        },
        {
          label: '分区',
          filedName: 'partitionName',
          render: (createElement, data) => {
            return createElement('bn-text-button','11-222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222')
          }
        },
        {
          label: '节点',
          filedName: 'hostName',
          render: (createElement, data) => {
            return createElement('bn-text-button','11-222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222')
          }
        }
      ]
    }
  ]

  export default {
    name: "index",
    data() {
      return {
        visible: false,
        drawerVisible: false,
        loading: false,
        columns: [
          {prop: 'date', label: '日期', width: "150px"},
          {prop: 'name', label: '姓名', width: "150px"},
          {prop: 'address', label: '地址', width: "150px"}
        ],
        dataSource: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        listCardColumns,
        listCardDataSource: {
          name: 'default-token-6p2w5',
          applicationName: 'temp001',
          partitionName: 'cluster112-default',
          hostName: 'host-default'
        },
        list: [
          {
            label: '基础信息',
            children: [
              {
                label: '名称',
                value: 'serv'
              },
              {
                label: '所属应用',
                render: (createElement) => {
                  return createElement('bn-link', {
                    on: {
                      click: () => {
                        this.$router.push('/43')
                      }
                    }
                  }, 'temp001')
                }
              },
              {
                label: '分区',
                render: (createElement) => {
                  return createElement('bn-link', {
                    on: {
                      click: () => {
                        this.$router.push('/part34')
                      }
                    }
                  }, 'cluster112-default')
                }
              }
            ]
          }
        ],
        collapse: [
          {
            title: '一致性 Consistency',
            content: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
          },
          {
            title: '反馈 Feedback',
            content: '与用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策'
          },
          {
            title: '效率 Efficiency',
            content: '简化流程：设计简洁直观的操作流和概念；'
          }
        ],
        timeline: [
          {
            content: '活动按期开始',
            timestamp: '2018-04-15'
          }, {
            content: '通过审核',
            timestamp: '2018-04-13'
          }, {
            content: '创建成功',
            timestamp: '2018-04-11'
          }],
        value: '',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    },
    methods: {
      onClick() {
        this.visible = true
      }
    },
    components: {
      AddUserDialog,
      Drawer
    }
  }
</script>
