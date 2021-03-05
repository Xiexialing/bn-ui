import BocRate from './src/rate';

/* istanbul ignore next */
BocRate.install = function(Vue) {
  Vue.component(BocRate.name, BocRate);
};

export default BocRate;
