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
    <div v-if="status" :style="statusStyle" class="card-status">
      <i :class="dataSource.icon"></i>
      <span>{{dataSource.label}}</span>
    </div>
    <el-row :gutter="20" v-for="(item, index) in cardList" :key="index">
      <el-col :span="24">
        <h1 class="card-title">{{item.label}}</h1>
      </el-col>
      <el-col
        v-for="(innerItem, innerIndex) in item.children"
        :span="((item.children.length % splitNum !== 0) && (innerIndex === item.children.length - 1)) ? 24 : innerItem.span || 24 / splitNum"
        :key="innerIndex"
      >
        <p class="card-item text-ellipsis" :class="direction === 'tb' ? 'card-item--vertical' : ''" v-if="!innerItem.render">
          {{innerItem.label}}<span v-if="!direction">：</span>
          <bn-tooltip :content="innerItem.value">
            <span :class="'text-' + innerItem.fontType">{{innerItem.value}}</span>
          </bn-tooltip>
        </p>
        <div class="card-item" v-else>
          <span>{{innerItem.label}}：</span>
          <div class="card-item-value text-ellipsis">
            <bn-tooltip :content="innerItem.value">
              <ListRender class="text-ellipsis" :data="dataSource" :render="innerItem.render"/>
            </bn-tooltip>
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
      },
      status: {
        type: Boolean
      },
      direction: {
        type: String,
        validator(val) {
          // tb top and bottom 上下方式
          return ['tb', ''].indexOf(val) !== -1;
        }
      }
    },
    computed: {
      cardList() {
        const {dataSource, columns} = this
        const data = _.cloneDeep(columns)
        data.forEach(item => {
          const {children} = item
          children.forEach(child => {
            const value = dataSource[child.filedName]
            child.value = (_.isNil(value) ? _.isNil(child.default) ? '-' : child.default : value) + ''
          })
        })
        return data
      },
      statusStyle() {
        const {background, color} = this.dataSource
        let styleStr = ''
        if (background) styleStr += 'background-color:' + background + ';'
        if (color) styleStr += 'color:' + (color || '#fff')
        return styleStr
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

    .el-card__body {
      position: relative;

      .card-status {
        display: flex;
        align-items: center;
        position: absolute;
        padding: 5px 15px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        top: 20px;
        right: 0;
      }

      .card-item {
        display: flex;
        line-height: 28px;
        font-size: 14px;
        &.card-item--vertical{
          flex-direction: column-reverse;
          text-align: center;
        }
        .card-item-value {
          flex: 1;
        }
      }
    }

  }
</style>
