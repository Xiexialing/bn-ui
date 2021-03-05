<template>
  <el-menu
    v-bind="$attrs"
    :default-active="defaultActive"
    :default-openeds='defaultOpeneds'
    :router="router"
    @select="onSelect"
    @open="onOpen"
    @close="onClose"
    style="height: inherit;"
  >
    <BocMenuItem :data="menuList"/>
  </el-menu>
</template>

<script>
  import _ from 'lodash'
  import BocMenuItem from './menu-item'

  // 給菜单添加level层级字段  第一层是0
  const recursion = (source, index) => {
    source.forEach(item => {
      item.level = index
      const {children} = item
      if (children && children.length) {
        recursion(children, index + 1)
      }
    })
  }

  export default {
    name: "BocMenu",
    props: {
      data: {
        type: Array,
      },
      router: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      defaultActive() {
        return '1'
      },
      defaultOpeneds() {
        return []
      },
      menuList() {
        const {data} = this
        let menuList = _.cloneDeep(data)
        recursion(menuList, 0)
        return menuList
      }
    },
    methods: {
      onSelect(index, indexPath) {
        this.$emit('select', index, indexPath)
      },
      onOpen(index, indexPath) {
        this.$emit('open', index, indexPath)
      },
      onClose(index, indexPath) {
        this.$emit('close', index, indexPath)
      }
    },
    components: {
      BocMenuItem
    }
  }
</script>
