<template>
  <div>
    <boc-alert title="警告提示的文案"></boc-alert>
    <boc-button @click="onClick">按鈕</boc-button>
  </div>
</template>

<script>
  export default {
    name: "notice",
    methods: {
      onClick() {
        this.$affirm({
          name: 'helm-install-testzxy',
          callback: async () => {
          await new Promise(resolve => {
            setTimeout(() => {
              console.log(11111)
              resolve()
            }, 3000)
          })
        }
        })
      }
    }
  }
</script>

<style scoped>

</style>
