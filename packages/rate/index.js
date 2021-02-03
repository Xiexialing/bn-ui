import BnRate from './src/rate';

/* istanbul ignore next */
BnRate.install = function(Vue) {
  Vue.component(BnRate.name, BnRate);
};

export default BnRate;
