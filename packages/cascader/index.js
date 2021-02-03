import BnCascader from './src/cascader';

/* istanbul ignore next */
BnCascader.install = function(Vue) {
  Vue.component(BnCascader.name, BnCascader);
};

export default BnCascader;
