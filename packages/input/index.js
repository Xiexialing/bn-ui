import BnInput from './src/input';

/* istanbul ignore next */
BnInput.install = function(Vue) {
  Vue.component(BnInput.name, BnInput);
};

export default BnInput;
