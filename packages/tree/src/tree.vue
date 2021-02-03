<template>
  <el-tree
    v-bind="$attrs"
    :data="data"
    @node-click="(data, node, instance ) => this.$emit('node-click', data, node, instance )"
    @node-contextmenu="(event, data , node, instance) => this.$emit('node-contextmenu', event,data , node, instance)"
    @check-change="(data, isSelected, hasLeafSelected)=> this.$emit('check-change', data, isSelected, hasLeafSelected)"
    @check="(data, status) => this.$emit('check', data, status)"
    @current-change="(data, node) =>  this.$emit('current-change', data, node)"
    @node-expand="(data, node, instance ) => this.$emit('node-expand', data, node, instance )"
    @node-collapse="(data, node, instance ) => this.$emit('node-collapse', data, node, instance )"
    @node-drag-start="(Node, event) => this.$emit('node-drag-start', Node, event)"
    @node-drag-enter="(Node, node, event) => this.$emit('node-drag-enter', Node, node, event)"
    @node-drag-leave="(Node, node, event) => this.$emit('node-drag-leave', Node, node, event)"
    @node-drag-over="(Node, node, event) => this.$emit('node-drag-over', Node, node, event)"
    @node-drag-end="(Node, node,position, event) => this.$emit('node-drag-end', Node, node,position, event)"
    @node-drop="(Node, node,position, event) => this.$emit('node-drop', Node, node,position, event)"
    ref="treeRef"
  />
</template>

<script>
  export default {
    name: "BnTree",
    props: {
      data: {
        type: Array
      }
    },
    methods: {
      getTreeInstance() {
        return this.$refs.treeRef
      }
    }
  }
</script>

<style scoped>

</style>
