<template>
  <el-tabs
    :value="value"
    type="border-card"
    @tab-click="onTabClick"
  >
    <template v-for="tab in tabListComputed">
      <el-tab-pane
        :label="tab.label"
        :name="tab.index"
        :key="tab.index"
      >
        <slot
          :name="tab.slot"
          v-if="!tab.isCache ? value === tab.index : cacheNameList.includes(tab.index)"
        />
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script>
  export default {
    name: "BnTabs",
    props: {
      tabList: {
        type: Array
      },
      isCache: { // 是否全部缓存 true为是
        type: Boolean
      },
      value: {
        type: String,
        default: '0'
      }
    },
    data() {
      return {
        cacheNameList: []
      }
    },
    computed: {
      tabListComputed() {
        let {tabList, isCache} = this
        return tabList.map((tab, index) => ({
          ...tab,
          isCache: isCache || tab.isCache,
          index: index + ''
        }))
      }
    },
    methods: {
      onTabClick({name, index}) {
        this.$emit('input', name)
        this.$emit('change', name)
        const {cacheNameList, tabListComputed} = this
        const {isCache} = tabListComputed[Number(index)]
        if (isCache && !cacheNameList.includes(name)) {
          cacheNameList.push(name)
        }
      }
    },
    mounted() {
      this.cacheNameList.push(this.value)
    }
  }
</script>

<style scoped>

</style>
