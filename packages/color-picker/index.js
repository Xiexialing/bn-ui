import BnColorPicker from './src/color-picker';

/* istanbul ignore next */
BnColorPicker.install = function(Vue) {
  Vue.component(BnColorPicker.name, BnColorPicker);
};

export default BnColorPicker;
