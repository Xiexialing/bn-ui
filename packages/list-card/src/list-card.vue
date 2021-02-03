<template>
  <el-card
    v-bind="$attrs"
    class="card-wrapper"
    :header="header"
    :shadow="shadow"
  >
    <div slot="header" class="card__header" v-if="$slots.header">
      <slot name="header"/>
    </div>
    <el-row :gutter="20" v-for="(item, index) in cardList" :key="index">
      <el-col :span="24">
        <h1 class="card-title">{{item.label}}</h1>
      </el-col>
      <el-col
        v-for="(innerItem, innerIndex) in item.children"
        :span="((item.children.length % 2 !== 0) && (innerIndex === item.children.length - 1)) ? 24 : innerItem.span || 24 / splitNum"
        :key="innerIndex"
      >
        <p class="card-item" v-if="!innerItem.render">{{innerItem.label}}：{{innerItem.value}}</p>
        <div class="card-item" v-else>
          <span>{{innerItem.label}}：</span>
          <div class="card-item-value ellipsis">
            <ListRender class="ellipsis" :data="dataSource" :render="innerItem.render"/>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  import _ from 'lodash'
  import ListRender from './list-render'

  export default {
    name: "BnListCard",
    props: {
      header: {
        type: String
      },
      shadow: {
        type: String,
        default: "hover"
      },
      dataSource: {  // 详情
        type: Object,
        default() {
          return {}
        }
      },
      columns: {
        type: Array
      },
      splitNum: {
        type: Number,
        default: 2
      }
    },
    computed: {
      cardList() {
        const {dataSource, columns} = this
        const data = _.cloneDeep(columns)
        data.forEach(item => {
          const {children} = item
          children.forEach(child => {
            child.value = dataSource[child.filedName]
          })
        })
        return data
      }
    },
    components: {
      ListRender
    }
  }
</script>

<style lang="scss">
  .card-wrapper {
    .card__header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .el-button--medium {
        padding: 1px 0;
      }
    }

    .card-item {
      display: flex;
      line-height: 28px;
      font-size: 14px;
      .card-item-value{
        flex: 1;
      }
    }
  }
</style>
