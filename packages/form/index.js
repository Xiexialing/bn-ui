import BocForm from './src/form';

/* istanbul ignore next */
BocForm.install = function(Vue) {
  Vue.component(BocForm.name, BocForm);
};

export default BocForm;
