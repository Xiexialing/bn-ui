// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import button from '../packages/button'
import textButton from '../packages/text-button'
import link from '../packages/link'
import cancelButton from '../packages/cancel-button'
import radio from '../packages/radio'
import checkbox from '../packages/checkbox'
import checkboxes from '../packages/checkboxes'
import input from '../packages/input'
import inputNumber from '../packages/input-number'
import inputLimitNumber from '../packages/input-limit-number'
import cascader from '../packages/cascader'
import select from '../packages/select'
import bnSwitch from '../packages/switch'
import slider from '../packages/slider'
import timePicker from '../packages/time-picker'
import datePicker from '../packages/date-picker'
import dateTimePicker from '../packages/date-time-picker'
import upload from '../packages/upload'
import rate from '../packages/rate'
import colorPicker from '../packages/color-picker'
import transfer from '../packages/transfer'
import form from '../packages/form'
import searchForm from '../packages/search-form'
import table from '../packages/table'
import tag from '../packages/tag'
import progress from '../packages/progress'
import tree from '../packages/tree'
import pagination from '../packages/pagination'
import badge from '../packages/badge'
import avatar from '../packages/avatar'
import alert from '../packages/alert'
import menu from '../packages/menu'
import tabs from '../packages/tabs'
import breadcrumb from '../packages/breadcrumb'
import pageHeader from '../packages/page-header'
import dropdown from '../packages/dropdown'
import steps from '../packages/steps'
import dialog from '../packages/dialog'
import tooltip from '../packages/tooltip'
import popover from '../packages/popover'
import popconfirm from '../packages/popconfirm'
import card from '../packages/card'
import listCard from '../packages/list-card'
import collapse from '../packages/collapse'
import timeline from '../packages/timeline'
import divider from '../packages/divider'
import calendar from '../packages/calendar'
import image from '../packages/image'
import backtop from '../packages/backtop'
import drawer from '../packages/drawer'

import tip from '../packages/tip'
import affirm from '../packages/affirm'

import router from './routers'

import './assets/scss/common.scss'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'medium'
});

Vue.use(button)
Vue.use(link)
Vue.use(cancelButton)
Vue.use(radio)
Vue.use(checkbox)
Vue.use(checkboxes)
Vue.use(input)
Vue.use(inputNumber)
Vue.use(inputLimitNumber)
Vue.use(select)
Vue.use(cascader)
Vue.use(bnSwitch)
Vue.use(slider)
Vue.use(timePicker)
Vue.use(datePicker)
Vue.use(dateTimePicker)
Vue.use(upload)
Vue.use(rate)
Vue.use(colorPicker)
Vue.use(transfer)
Vue.use(form)
Vue.use(table)
Vue.use(tag)
Vue.use(progress)
Vue.use(tree)
Vue.use(pagination)
Vue.use(badge)
Vue.use(avatar)
Vue.use(alert)
Vue.use(menu)
Vue.use(tabs)
Vue.use(breadcrumb)
Vue.use(pageHeader)
Vue.use(dropdown)
Vue.use(steps)
Vue.use(dialog)
Vue.use(tooltip)
Vue.use(popover)
Vue.use(popconfirm)
Vue.use(card)
Vue.use(listCard)
Vue.use(collapse)
Vue.use(timeline)
Vue.use(divider)
Vue.use(calendar)
Vue.use(image)
Vue.use(backtop)
Vue.use(drawer)
Vue.use(searchForm)
Vue.use(textButton)


Vue.prototype.$Tip = tip  // 提示语
Vue.prototype.$Affirm = affirm // 确认框

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
