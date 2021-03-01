<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-checkbox :value="value" @input="onInput" @change="onChange" v-bind="$attrs">{{name}}</el-checkbox>
  </el-form-item>
</template>

<script>
  import submitMixin from '@/mixins/submit'
  export default {
    name: "BnCheckbox",
    props: {
      value: {
        type: Boolean
      },
      name: {
        type: String
      },
      label: {
        type: String,
      },
      prop: {
        type: String
      },
      'label-width': {
        type: String
      }
    },
    mixins: [submitMixin],
    methods: {
      onInput(val) {
        this.$emit('input', val)
      },
      onChange(val) {
        const {onKeydown} = this
        if(onKeydown) {
          onKeydown()
        }
        this.$emit('change', val)
      }
    }
  }
</script>

<style scoped>

</style>
