import BocCascader from './src/cascader';

/* istanbul ignore next */
BocCascader.install = function(Vue) {
  Vue.component(BocCascader.name, BocCascader);
};

export default BocCascader;
