import BocPie from './src/pie';

/* istanbul ignore next */
BocPie.install = function(Vue) {
  Vue.component(BocPie.name, BocPie);
};

export default BocPie;
