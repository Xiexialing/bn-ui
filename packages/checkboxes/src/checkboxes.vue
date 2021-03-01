<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-checkbox-group :value="value" @input="onInput" @change="onChange" v-bind="$attrs">
      <template v-if="!button">
        <el-checkbox
          v-for="opt in options"
          :label="opt.value"
          :key="opt.value"
          :disabled="opt.disabled"
        >{{opt.label}}
        </el-checkbox>
      </template>
      <template v-else>
        <el-checkbox-button
          v-for="opt in options"
          :label="opt.value"
          :key="opt.value"
          :disabled="opt.disabled"
        >{{opt.label}}
        </el-checkbox-button>
      </template>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
  import submitMixin from '@/mixins/submit'
  export default {
    name: "BnCheckboxes",
    props: {
      value: {
        type: Array,
        default() {
          return []
        }
      },
      label: {
        type: String,
      },
      prop: {
        type: String
      },
      'label-width': {
        type: String
      },
      options: {
        type: Array,
        default() {
          return [
            {label: '', value: ''}
          ]
        }
      },
      button: {
        type: Boolean
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
