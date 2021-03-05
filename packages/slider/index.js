import BocSlider from './src/slider';

/* istanbul ignore next */
BocSlider.install = function(Vue) {
  Vue.component(BocSlider.name, BocSlider);
};

export default BocSlider;
