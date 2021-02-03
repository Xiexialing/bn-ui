import BnAlert from './src/alert';

/* istanbul ignore next */
BnAlert.install = function(Vue) {
  Vue.component(BnAlert.name, BnAlert);
};

export default BnAlert;
