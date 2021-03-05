import BocDropdown from './src/dropdown';

/* istanbul ignore next */
BocDropdown.install = function(Vue) {
  Vue.component(BocDropdown.name, BocDropdown);
};

export default BocDropdown;
