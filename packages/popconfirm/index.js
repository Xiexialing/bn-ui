import BocPopconfirm from './src/popconfirm';

/* istanbul ignore next */
BocPopconfirm.install = function(Vue) {
  Vue.component(BocPopconfirm.name, BocPopconfirm);
};

export default BocPopconfirm;
