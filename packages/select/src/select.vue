<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth">
    <el-select :value="value"
               :placeholder="placeholder"
               v-bind="$attrs"
               :clearable="clearable"
               :popper-append-to-body="popperAppendToBody"
               :filterable="filterable"
               :reserve-keyword="reserveKeyword"
               :remote="remote"
               :remote-method="remoteFunction"
               :loading="loading"
               @input="onInput"
               @change="onChange"
               @visible-change="onVisibleChange"
               @remove-tag="onRemoveTag"
               @clear="onClear"
               @blur="onBlur"
               @focus="onFocus"

               style="width: 100%;"
    >
      <template v-for="item in options">
        <!--value的值取label  是为了防止编辑的时候显示id-->
        <el-option
          v-if="!item.options"
          :key="item.value"
          :label="item.label"
          :value="item.label"
          :disabled="item.disabled"
        >
          <slot v-if="$scopedSlots.default" :row="item"/>
        </el-option>

        <el-option-group
          v-else
          :key="item.label"
          :label="item.label">
          <el-option
            v-for="innerItem in item.options"
            :key="innerItem.value"
            :label="innerItem.label"
            :disabled="item.disabled"
            :value="innerItem.label"
          >
            <slot v-if="$scopedSlots.default" :row="innerItem"/>
          </el-option>
        </el-option-group>
      </template>
    </el-select>
  </el-form-item>
</template>

<script>
  import submitMixin from 'bn-ui/src/mixins/submit'
  export default {
    name: "BnSelect",
    props: {
      value: '',
      options: {
        type: Array,
        default() {
          return [
            {label: '', value: ''}
          ]
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
      clearable: {
        type: Boolean,
        default: true
      },
      remote: {
        type: Boolean,
        default: false
      },
      remoteMethod: {
        type: Function,
      },
      'reserve-keyword': {
        type: Boolean,
        default: true
      },
      filterable: {
        type: Boolean,
        default: true
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      popperAppendToBody: {
        type: Boolean,
        default: true
      }
    },
    mixins: [submitMixin],
    data() {
      return {
        loading: false
      }
    },
    methods: {
      async remoteFunction(query) {
        const {remoteMethod} = this
        this.loading = true
        await remoteMethod(query)
        this.loading = false
      },
      onInput(val) {
        this.$emit('input', val)
      },
      onChange(val) {
        const {onKeydown} = this
        if(onKeydown) {
          onKeydown()
        }
        this.$emit('change', val)
      },
      onFocus(event) {
        this.$emit('focus', event)
      },
      onBlur(event) {
        this.$emit('blur', event)
      },
      onVisibleChange(bool) {
        this.$emit('visible-change', bool)
      },
      onRemoveTag(tag) {
        this.$emit('visible-change', tag)
      },
      onClear() {
        this.$emit('clear')
      }
    }
  }
</script>

<style scoped>

</style>
