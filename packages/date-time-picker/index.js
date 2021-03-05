import BocDateTimePicker from './src/date-time-picker';

/* istanbul ignore next */
BocDateTimePicker.install = function(Vue) {
  Vue.component(BocDateTimePicker.name, BocDateTimePicker);
};

export default BocDateTimePicker;
