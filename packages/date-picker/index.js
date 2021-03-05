import BocDatePicker from './src/date-picker';

/* istanbul ignore next */
BocDatePicker.install = function(Vue) {
  Vue.component(BocDatePicker.name, BocDatePicker);
};

export default BocDatePicker;
