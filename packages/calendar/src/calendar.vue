<template>
  <el-calendar
    v-bind="$attrs"
    :range="range"
    :value="value"></el-calendar>
</template>

<script>
  export default {
    name: "BocCalendar",
    props: {
      value: {
        type: Date | String,
        default() {
          return new Date();
        }
      },
      range: {
        type: Array
      }
    },
    mounted() {
      if(!this.value) {
        this.$emit('input', new Date())
      }
    }
  }
</script>
