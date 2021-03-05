import BocAlert from './src/alert';

/* istanbul ignore next */
BocAlert.install = function(Vue) {
  Vue.component(BocAlert.name, BocAlert);
};

export default BocAlert;
