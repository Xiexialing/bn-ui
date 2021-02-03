import BnBacktop from './src/backtop';

/* istanbul ignore next */
BnBacktop.install = function(Vue) {
  Vue.component(BnBacktop.name, BnBacktop);
};

export default BnBacktop;
