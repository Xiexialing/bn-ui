import BocStatus from './src/status';

/* istanbul ignore next */
BocStatus.install = function(Vue) {
  Vue.component(BocStatus.name, BocStatus);
};

export default BocStatus;
