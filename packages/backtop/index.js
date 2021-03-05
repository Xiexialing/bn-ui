import BocBacktop from './src/backtop';

/* istanbul ignore next */
BocBacktop.install = function(Vue) {
  Vue.component(BocBacktop.name, BocBacktop);
};

export default BocBacktop;
