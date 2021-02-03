import BnCollapse from './src/collapse';

/* istanbul ignore next */
BnCollapse.install = function(Vue) {
  Vue.component(BnCollapse.name, BnCollapse);
};

export default BnCollapse;
