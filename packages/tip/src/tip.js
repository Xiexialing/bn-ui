import {Message} from 'element-ui'

const BASE_INFO = {
  showClose: true,
  dangerouslyUseHTMLString: true,
  duration: 900
}

export const tip = {
  success: (message) => {
    Message(Object.assign({
      message,
      type: 'success'
    }, BASE_INFO))
  },
  error: (message) => {
    Message(Object.assign({
      message,
      type: 'error'
    }, BASE_INFO))
  },
  warning: (message) => {
    Message(Object.assign({
      message,
      type: 'warning'
    }, BASE_INFO))
  },
  info: (message) => {
    Message(Object.assign({
      message,
      type: 'info'
    }, BASE_INFO))
  }
}
