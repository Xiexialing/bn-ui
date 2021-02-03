<template>
  <div style="display: flex;">
    <div
      class="menu-wrapper"
    >
      <bn-menu
        :data="menuList"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      />
    </div>
    <div>
      <bn-page-header></bn-page-header>
      <bn-tabs :tabList="tabList" v-model="activeIndex">
        <PartitionHosts slot="PartitionHosts"/>
        <PartitionApplications slot="PartitionApplications"/>
        <PartitionServices slot="PartitionServices"/>
        <PartitionInstances slot="PartitionInstances"/>
      </bn-tabs>
      <bn-breadcrumb :data="breadcrumb"></bn-breadcrumb>
      <bn-dropdown
        v-model="value"
        :data="dropdown"
        @change="onChange"
        direction="vertical"
      />
      <bn-button @click="onNext">下一步</bn-button>
      <bn-steps
        v-model="step"
        :data="dropdown"
      />
    </div>
  </div>
</template>

<script>
  import PartitionApplications from './pages/PartitionApplications'
  import PartitionHosts from './pages/PartitionHosts'
  import PartitionInstances from './pages/PartitionInstances'
  import PartitionServices from './pages/PartitionServices'

  const tabList = [
    {
      label: '分区节点',
      slot: 'PartitionHosts',
      isCache: true
    },
    {
      label: '分区应用',
      slot: 'PartitionApplications',
    },
    {
      label: '分区服务',
      slot: 'PartitionServices'
    },
    {
      label: '分区实例',
      slot: 'PartitionInstances'
    }
  ]

  export default {
    name: "Navigation",
    data() {
      return {
        menuList: [
          {
            index: '1',
            label: '处理中心',
            iconClass: 'el-icon-user-solid',
          },
          {
            index: '2',
            label: '我的工作台',
            iconClass: 'el-icon-camera',
            children: [
              {
                index: '2-1',
                label: '选项1',
                iconClass: 'el-icon-s-unfold',
              },
              {
                index: '2-2',
                label: '选项2',
                iconClass: 'el-icon-s-unfold',
              },
              {
                index: '2-3',
                label: '选项3',
                iconClass: 'el-icon-s-unfold',
              },
              {
                index: '2-4',
                label: '选项4',
                iconClass: 'el-icon-s-unfold',
                children: [
                  {
                    index: '3-1',
                    label: '选项1',
                    iconClass: 'el-icon-s-unfold',
                  },
                  {
                    index: '3-2',
                    label: '选项2',
                    iconClass: 'el-icon-s-unfold',
                  }
                ]
              }
            ]
          },
          {
            index: '3',
            label: '消息中心',
            iconClass: 'el-icon-s-platform',
            children: [
              {
                index: '2-1',
                label: '选项1',
                iconClass: 'el-icon-s-unfold',
                level: 1
              },
              {
                index: '2-2',
                label: '选项2',
                iconClass: 'el-icon-s-unfold',
                level: 1
              },
              {
                index: '2-3',
                label: '选项3',
                iconClass: 'el-icon-s-unfold',
                level: 1
              },
              {
                index: '2-4',
                label: '选项4',
                iconClass: 'el-icon-s-unfold',
                level: 1,
                children: [
                  {
                    index: '4-1',
                    label: '选项1',
                    iconClass: 'el-icon-s-unfold',
                    level: 2
                  },
                  {
                    index: '4-2',
                    label: '选项2',
                    iconClass: 'el-icon-s-unfold',
                    level: 2
                  }
                ]
              }
            ]
          },
          {
            index: '4',
            label: '订单中心',
            iconClass: 'el-icon-goods',
          }
        ],
        isCollapse: false,
        activeIndex: '1',
        tabList,
        breadcrumb: [
          {
            label: '首页',
            to: '/111'
          },
          {
            label: '首页',
            replace: '/222'
          },
          {
            label: '首页'
          }
        ],
        dropdown: [
          {
            label: '更多',
            value: '更多',
            description: '这是一段很长很长很长的描述性文字',
            icon: 'el-icon-edit'
          },
          {
            label: '111',
            value: '111',
            description: '这是一段很长很长很长的描述性文字',
            icon: 'el-icon-edit'
          },
          {
            label: '222',
            value: '222',
            description: '这是一段很长很长很长的描述性文字',
            icon: 'el-icon-edit'
          },
          {
            label: '333',
            value: '333',
            icon: 'el-icon-plus',
            description: '这是一段很长很长很长的描述性文字'
          }
        ],
        value: '更多',
        step: 0
      }
    },
    methods: {
      onNext() {
        let {step} = this
        if (step >= this.dropdown.length - 1) {
          step = 0
        } else {
          step += 1
        }
        this.step = step
      },
      onChange(value) {
        console.log(value)
      }
    },
    components: {
      PartitionServices,
      PartitionApplications,
      PartitionInstances,
      PartitionHosts
    }
  }
</script>

<style scoped lang="scss">
  .menu-wrapper {
    width: 200px;
    height: calc(100vh - 20px);
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
