import BnForm from './src/form';

/* istanbul ignore next */
BnForm.install = function(Vue) {
  Vue.component(BnForm.name, BnForm);
};

export default BnForm;
