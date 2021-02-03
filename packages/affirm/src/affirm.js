import {MessageBox} from 'element-ui'

export const affirm = ({message, title = '提示', name, callback}) => {
  MessageBox.confirm(message = `您确认删除${name || '该数据'}吗？`, name ? '删除' + name : title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    closeOnClickModal: false,
    beforeClose: async (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        instance.confirmButtonText = '执行中...'
        if (callback) {
          await callback()
          done()
          setTimeout(() => {
            instance.confirmButtonLoading = false
          }, 500)
        }
      } else {
        done()
      }
    }
  }).catch(() => {
  })
}
