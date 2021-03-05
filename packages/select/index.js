import BocSelect from './src/select';

/* istanbul ignore next */
BocSelect.install = function(Vue) {
  Vue.component(BocSelect.name, BocSelect);
};

export default BocSelect;
