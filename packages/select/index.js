import BnSelect from './src/select';

/* istanbul ignore next */
BnSelect.install = function(Vue) {
  Vue.component(BnSelect.name, BnSelect);
};

export default BnSelect;
