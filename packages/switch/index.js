import BnSwitch from './src/switch';

/* istanbul ignore next */
BnSwitch.install = function(Vue) {
  Vue.component(BnSwitch.name, BnSwitch);
};

export default BnSwitch;
