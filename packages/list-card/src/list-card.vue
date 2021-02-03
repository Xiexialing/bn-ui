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
    <el-row :gutter="20" v-for="(item, index) in dataSource" :key="index">
      <el-col :span="24">
        <h1 class="card-list-title">{{item.label}}</h1>
      </el-col>
      <el-col
        v-for="(innerItem, innerIndex) in item.children"
        :span="innerItem.span || 24 / splitNum"
        :key="innerIndex"
      >
        <p class="card-content-item" v-if="!innerItem.render">{{innerItem.label}}：{{innerItem.value}}</p>
        <p class="card-content-item" v-else>
          {{innerItem.label}}：
          <ListRender :render="innerItem.render"/>
        </p>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
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
      dataSource: {
        type: Array,
        default() {
          return [
            {
              label: '',
              children: [
                {
                  label: '',
                  value: ''
                }
              ]
            }
          ]
        }
      },
      splitNum: {
        type: Number,
        default: 2
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

    .card-content-item {
      line-height: 28px;
      font-size: 14px;
    }
  }
</style>
