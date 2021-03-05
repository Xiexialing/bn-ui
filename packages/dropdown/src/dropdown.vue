<template>
  <el-dropdown
    v-bind="$attrs"
    @command="onCommand"
  >
    <boc-button type="text">
      {{value}}<i class="el-icon-arrow-down el-icon--right"></i>
    </boc-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(item, index) in data"
        :key="index"
        :icon="item.icon"
        :command="item.label"
      >{{item.label}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  let cacheValue = ''

  export default {
    name: "BocDropdown",
    props: {
      data: {
        type: Array
      },
      value: {
        type: String,
        default: '更多'
      }
    },
    methods: {
      onCommand(command) {
        if (cacheValue === command) return
        cacheValue = command
        this.$emit('input', command)
        this.$emit('change', command)
      }
    },
    mounted() {
      cacheValue = this.value
    }
  }
</script>

<style scoped>

</style>
