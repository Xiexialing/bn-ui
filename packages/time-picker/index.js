import BocTimePicker from './src/time-picker';

/* istanbul ignore next */
BocTimePicker.install = function(Vue) {
  Vue.component(BocTimePicker.name, BocTimePicker);
};

export default BocTimePicker;
