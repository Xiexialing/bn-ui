<script>
  export default {
    name: 'ListRender',
    functional: true,
    props: {
      render: {
        type: Function
      },
      data: {
        type: Object
      }
    },
    render(h, context) {
      let {render, data} = context.props
      return render(h, data)
    }
  }
</script>
