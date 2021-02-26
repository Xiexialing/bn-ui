import BnLiquid from './src/liquid';

/* istanbul ignore next */
BnLiquid.install = function(Vue) {
  Vue.component(BnLiquid.name, BnLiquid);
};

export default BnLiquid;
