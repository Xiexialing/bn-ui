import BocInput from './src/input';

/* istanbul ignore next */
BocInput.install = function(Vue) {
  Vue.component(BocInput.name, BocInput);
};

export default BocInput;
