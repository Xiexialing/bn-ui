import BnDateTimePicker from './src/date-time-picker';

/* istanbul ignore next */
BnDateTimePicker.install = function(Vue) {
  Vue.component(BnDateTimePicker.name, BnDateTimePicker);
};

export default BnDateTimePicker;
