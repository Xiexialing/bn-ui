<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <div id="inputLimitNumber">
      <el-input-number
        :value="value"
        controls-position="right"
        v-bind="$attrs"
        :min="min || 0"
        :max="max"
        @input="onInput"
        @change="onChange"
        @blur="onBlur"
        @keydown.native.enter="onKeydown"
      />
      <div class="limit-wrapper">
        <boc-input disabled :value="limitWords + max"/>
      </div>
    </div>
  </el-form-item>
</template>

<script>
  import submitMixin from '../../../src/mixins/submit'
  export default {
    name: "BocInputLimitNumber",
    props: {
      value: {
        type: Number
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
      min: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: 0
      },
      limitWords: {
        type: String,
        default: '当前可用额度：'
      }
    },
    mixins: [submitMixin],
    methods: {
      onInput(value) {
        this.$emit('input', value)
      },
      onChange(value) {
        this.$emit('change', value)
      },
      onBlur(value) {
        this.$emit('blur', value)
      }
    }
  }
</script>

<style scoped lang="scss">
  #inputLimitNumber {
    display: flex;

    .limit-wrapper {
      margin-left: 5px;
    }
  }
</style>
