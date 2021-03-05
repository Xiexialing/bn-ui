import BocRadio from './src/radio';

/* istanbul ignore next */
BocRadio.install = function(Vue) {
  Vue.component(BocRadio.name, BocRadio);
};

export default BocRadio;
