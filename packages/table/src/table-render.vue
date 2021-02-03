<script>
  export default {
    name: 'TableRender',
    functional: true,
    props: {
      row: {
        type: Object
      },
      $index: {
        type: Number
      },
      render: {
        type: Function
      }
    },
    render(h, context) {
      let {render, row, $index} = context.props
      return render(h, row, $index)
    }
  }
</script>
