<template>
  <div>
    <boc-button @click="onClick">新增</boc-button>
    <br/>
    <br/>
    <br/>
    <br/>
    <boc-tooltip content="111111">
      <boc-button>默认上边</boc-button>
    </boc-tooltip>
    <boc-popover content="这是一段内容,这是一段内容,这是一段内容,这是一段内容">
      <boc-table :columns="columns" :data-source="dataSource" :loading="loading"/>
      <el-button slot="reference">hover 激活</el-button>
    </boc-popover>
    <boc-popconfirm title="这是一段内容确定删除吗？">
      <boc-button>删除</boc-button>
    </boc-popconfirm>
    <boc-card header="卡片名称">
      <!--格式固定-->
      <template slot="header">
        <span>卡片名称</span>
        <div>
          <boc-text-button>操作按钮1</boc-text-button>
          <boc-text-button>操作按钮2</boc-text-button>
          <boc-text-button>操作按钮3</boc-text-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o">
        {{'列表内容 ' + o }}
      </div>
    </boc-card>
    <boc-collapse :data="collapse"/>
    <boc-list-card header="列表" :columns="listCardColumns" status :dataSource="listCardDataSource"/>
    <el-row>
      <el-col :span="12">
        <el-col :span="12">
          <boc-list-card header="列表" direction="tb" :split-num="3" :columns="listCardColumns2"
                        :dataSource="listCardDataSource2"/>
        </el-col>
        <el-col :span="12">
          <boc-list-card header="列表" direction="tb" :split-num="3" :columns="listCardColumns2"
                        :dataSource="listCardDataSource2"/>
        </el-col>
        <el-col :span="12">
          <boc-list-card header="列表" direction="tb" :split-num="3" :columns="listCardColumns2"
                        :dataSource="listCardDataSource2"/>
        </el-col>
        <el-col :span="12">
          <boc-list-card header="列表" direction="tb" :split-num="3" :columns="listCardColumns2"
                        :dataSource="listCardDataSource2"/>
        </el-col>
      </el-col>
    </el-row>

    <boc-timeline :data="timeline"/>
    <boc-divider>
      少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉
    </boc-divider>
    <boc-divider>
      少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉
    </boc-divider>
    <boc-divider>
    </boc-divider>
    <boc-divider>
      <i class="el-icon-mobile-phone"></i>
    </boc-divider>
    <span>雨纷纷</span>
    <boc-divider direction="vertical"></boc-divider>
    <span>旧故里</span>
    <boc-divider direction="vertical"></boc-divider>
    <span>草木深</span>
    <boc-calendar :range="['2019-03-04', '2019-03-24']" v-model="value"/>
    <boc-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              :preview-src-list="srcList"
    />
    <boc-button @click="drawerVisible = true">打开抽屉</boc-button>
    <Drawer :visible.sync="drawerVisible" v-if="drawerVisible"/>
    <AddUserDialog :visible.sync="visible" v-if="visible"/>
  </div>
</template>

<script>
  import Drawer from './drawers/Drawer'
  import AddUserDialog from './dialogs/AddUserDialog'
  import {statusUtils} from "../../utils/statusUtils";

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
            return createElement('boc-link', 'dasda-dasdasd')
          }
        }, {
          label: '数量1',
          filedName: 'num',
          default: 0
        },
        {
          label: '数量2',
          filedName: 'num2',
        },
        {
          label: '分区',
          filedName: 'partitionName',
          render: (createElement, data) => {
            return createElement('boc-text-button', '11-222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222')
          }
        },
        {
          label: '节点',
          filedName: 'hostName',
          render: (createElement, data) => {
            return createElement('boc-text-button', '11-222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222')
          }
        }
      ]
    }
  ]

  const listCardColumns2 = [
    {
      label: '控制节点',
      children: [
        {
          label: '总数',
          filedName: 'total'
        },
        {
          label: '正常',
          filedName: 'normal'
        },
        {
          label: '异常',
          filedName: 'abocormal',
          fontType: 'warning'
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
        listCardColumns2,
        listCardDataSource: {
          name: 'default-tokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentoken-6p2w5',
          applicationName: 'temp001',
          partitionName: 'cluster112-default',
          hostName: 'host-default',
          ...statusUtils.cluster(1)
        },
        listCardDataSource2: {
          total: 12,
          normal: 15,
          abocormal: 13
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
                  return createElement('boc-link', {
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
                  return createElement('boc-link', {
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
