<script>
  export default {
    name: 'ListRender',
    functional: true,
    props: {
      render: {
        type: Function
      }
    },
    render(h, context) {
      let {render} = context.props
      return render(h)
    }
  }
</script>
