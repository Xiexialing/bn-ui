import BnTimePicker from './src/time-picker';

/* istanbul ignore next */
BnTimePicker.install = function(Vue) {
  Vue.component(BnTimePicker.name, BnTimePicker);
};

export default BnTimePicker;
