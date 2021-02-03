<template>
  <div>
    <bn-tag
      label="标签一"
      closable
    />
    <bn-progress
      :percentage="12"
      type="dashboard"
    />
    <bn-tree
      :data="data"
      show-checkbox
      lazy
      :load="loadNode"
      @node-click="onNodeClick"
    />
    <bn-pagination
      :size.sync="query.size"
      :current.sync="query.current"
      :total="30"
      @change="onPageChange"
    />
    <bn-badge :value="12" is-dot>
      <bn-button size="small">评论</bn-button>
    </bn-badge>
    <bn-avatar />
  </div>
</template>

<script>
  export default {
    name: "Vdata",
    data() {
      return {
        query: {
          size: 10,
          current: 1
        },
        data: [{
          label: '一级 1',
          name: '111',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        count: 1
      }
    },
    methods: {
      onPageChange() {
        console.log(this.query)
      },
      onNodeClick(data) {
        console.log(data)
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{label: 'region1'}, {label: 'region2'}]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.label === 'region1') {
          hasChild = true;
        } else if (node.data.label === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              label: 'zone' + this.count++
            }, {
              label: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    }
  }
</script>

<style scoped>

</style>
