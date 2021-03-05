import BocLiquid from './src/liquid';

/* istanbul ignore next */
BocLiquid.install = function(Vue) {
  Vue.component(BocLiquid.name, BocLiquid);
};

export default BocLiquid;
