<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-date-picker
      :value="value"
      v-bind="$attrs"
      align="right"
      :type="type"
      :format="finalFormat"
      placeholder="选择日期"
      :value-format="valueFormat"
      :picker-options="options"
      :range-separator="rangeSeparator"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      @input="onInput"
      @change="onChange"
    >
    </el-date-picker>
  </el-form-item>
</template>

<script>
  import submitMixin from '@/mixins/submit'
  export default {
    name: "BnDatePicker",
    props: {
      value: {
        type: String | Date
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
      type: {
        type: String,
        default: 'date'
      },
      placeholder: {
        type: String,
        default: '请选择日期'
      },
      format: {
        type: String,
        default: ''
      },
      pickerOptions: {
        type: Object
      },
      'range-separator': {
        type: String,
        default: "至"
      },
      'start-placeholder': {
        type: String,
        default: "开始日期"
      },
      'end-placeholder': {
        type: String,
        default: "结束日期"
      }
    },
    mixins: [submitMixin],
    data() {
      return {
        options: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        }
      }
    },
    computed: {
      finalFormat() {
        return this.format || (this.type === 'week' ? 'yyyy 第 WW 周' : '')
      },
      valueFormat() {
        return this.type === 'year' ? 'yyyy' : this.type === 'month' ? 'yyyy-MM' : 'yyyy-MM-dd'
      }
    },
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
    },
    created() {
      Object.assign(this.options, this.pickerOptions)
    }
  }
</script>

<style scoped>

</style>
