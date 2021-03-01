<!--
适用情况：表格操作列按钮比较多
参数说明：
actions  数组 按钮相关信息
row    对象 表格当前行信息
maxActions  number 直观显示按钮数，大于这个值时，部分按钮将放到更多里面
-->
<template>
  <div id="tableActions">
    <template v-for="(btn, index) in normalActions">
      <el-tooltip
        :key="index"
        :content="btn.title"
        placement="top"
      >
        <!--文字模式-->
        <el-button
          v-if="icon"
          :icon="btn.icon"
          type="text"
          :disabled="btn.disabled"
          style="padding:0 2px;"
          @click="btn.action(row, $index)"
        />
        <!--图标模式-->
        <bn-button
          v-else
          type="text"
          :disabled="btn.disabled"
          style="padding:0 2px;"
          @click="btn.action(row, $index)"
        >
          {{ btn.title }}
        </bn-button>
      </el-tooltip>
    </template>
    <el-dropdown v-if="dropdownActions.length">
      <el-tooltip
        class="item"
        effect="dark"
        content="更多"
        placement="top"
      >
        <el-button
          type="text"
          icon="el-icon-arrow-down"
        />
      </el-tooltip>
      <el-dropdown-menu slot="dropdown">
        <template v-for="(btn, index) in dropdownActions">
          <el-dropdown-item
            :key="index"
            :icon="btn.icon"
            :disabled="btn.disabled"
            @click.native.prevent="btn.action(row, $index)"
          >
            {{ btn.title }}
          </el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  import {ACTIONS_MAP} from '@/constants/actionsMap.js'

  const generateActions = (originalActions) => {
    return originalActions.map(action => ({
      ...action,
      ...ACTIONS_MAP[action.key]
    }))
  }

  export default {
    props: {
      actions: {
        // 按钮数组
        type: Array
      },
      row: {
        // 数据
        type: Object
      },
      $index: {  // 当前第几行数据
        type: Number
      },
      maxActions: {
        // 正常显示的数量
        type: Number,
        default: 3
      },
      icon: {
        // 文字模式：还是icon模式  默认是true icon模式
        type: Boolean,
        default: true
      }
    },
    computed: {
      availableActions() {
        // 过滤掉不显示的按钮
        let actions = this.actions.filter(({show}) => show === undefined || (show instanceof Function && show(this.row)) || (show instanceof Boolean && show))
        // 根据key值补充title、icon字段
        actions = generateActions(actions)
        return actions.map(action => ({
          ...action,
          disabled: action.disabled !== undefined && ((action.disabled instanceof Function && action.disabled(this.row)) || (!(action.disabled instanceof Function) && action.disabled))
        }))
      },
      normalActions() {
        // 平铺展示的按钮项
        const {availableActions, maxActions} = this
        return availableActions.length <= maxActions ? availableActions : availableActions.slice(0, maxActions - 1)
      },
      dropdownActions() {
        // dropdown的按钮项
        const {availableActions, maxActions} = this
        return availableActions.length <= maxActions ? [] : availableActions.slice(maxActions - 1)
      }
    }
  }
</script>
<style lang="scss">
  #tableActions {
    .el-button + .el-button {
      margin-left: 3px;
    }

    .el-button {
      padding: 5px 3px !important;
    }
  }
</style>
