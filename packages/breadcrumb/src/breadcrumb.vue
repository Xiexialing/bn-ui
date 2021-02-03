<template>
  <el-breadcrumb :separator="separator">
    <template v-for="(breadcrumb, index) in data">
      <el-breadcrumb-item
        :key="index"
        v-if="breadcrumb.replace || breadcrumb.to"
        :to="breadcrumb.to || breadcrumb.replace"
        :replace="!!breadcrumb.replace"
      >
        {{breadcrumb.label}}
      </el-breadcrumb-item>
      <el-breadcrumb-item
        :key="index"
        v-else
      >
        {{breadcrumb.label}}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "BnBreadcrumb",
    props: {
      data: {
        type: Array
      },
      separator: {
        type: String,
        default: '/'
      }
    }
  }
</script>
