import BocSwitch from './src/switch';

/* istanbul ignore next */
BocSwitch.install = function(Vue) {
  Vue.component(BocSwitch.name, BocSwitch);
};

export default BocSwitch;
