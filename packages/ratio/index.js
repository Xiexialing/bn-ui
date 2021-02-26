import BnRatio from './src/ratio';

/* istanbul ignore next */
BnRatio.install = function(Vue) {
  Vue.component(BnRatio.name, BnRatio);
};

export default BnRatio;
