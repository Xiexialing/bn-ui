<template>
  <div class="timeline-wrapper">
    <el-timeline
        v-bind="$attrs"
    >
      <el-timeline-item
        v-for="(activity, index) in data"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
        :placement="activity.placement || 'top'"
      >
        <el-card>
          <p v-html="activity.content"></p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
  export default {
    name: "BnTimeline",
    props: {
      data: {
        type: Array,
      }
    }
  }
</script>

<style scoped lang="scss">
  .timeline-wrapper{
    padding: 20px;
  }
</style>
