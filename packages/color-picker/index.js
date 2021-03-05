import BocColorPicker from './src/color-picker';

/* istanbul ignore next */
BocColorPicker.install = function(Vue) {
  Vue.component(BocColorPicker.name, BocColorPicker);
};

export default BocColorPicker;
