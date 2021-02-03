import BnSlider from './src/slider';

/* istanbul ignore next */
BnSlider.install = function(Vue) {
  Vue.component(BnSlider.name, BnSlider);
};

export default BnSlider;
