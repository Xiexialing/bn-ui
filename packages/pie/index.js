import BnPie from './src/pie';

/* istanbul ignore next */
BnPie.install = function(Vue) {
  Vue.component(BnPie.name, BnPie);
};

export default BnPie;
