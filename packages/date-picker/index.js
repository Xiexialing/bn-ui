import BnDatePicker from './src/date-picker';

/* istanbul ignore next */
BnDatePicker.install = function(Vue) {
  Vue.component(BnDatePicker.name, BnDatePicker);
};

export default BnDatePicker;
