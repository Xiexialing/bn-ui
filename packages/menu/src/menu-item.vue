<template>
  <div>
    <template v-for="item in data">
      <el-menu-item
        v-if="!item.children || !item.children.length"
        :key="item.index"
        :index="item.index"
        :style="{marginLeft: 2 * item.level + 'px'}"
      >
        <i :class="item.iconClass"></i>
        {{item.label}}
      </el-menu-item>
      <el-submenu v-else :key="item.index" :index="item.index">
        <template slot="title">
          <div :style="{marginLeft: 2 * item.level + 'px'}">
            <i :class="item.iconClass"></i>
            {{item.label}}
          </div>
        </template>
        <boc-menu-item :data="item.children" v-bind="$attrs"></boc-menu-item>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: "bocMenuItem",
    props: {
      data: {
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>
