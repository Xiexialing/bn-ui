export default {
  inject: {
    onFormSubmit: {
      type: Function,
      default: null
    },
    onFormSearch: {
      type: Function,
      default: null
    }
  },
  methods: {
    onKeydown() {
      const {onFormSubmit, onFormSearch} = this
      if (onFormSearch) {
        onFormSearch()
      }
      if (onFormSubmit) {
        onFormSubmit()
      }
    }
  }
}
