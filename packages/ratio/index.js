import BocRatio from './src/ratio';

/* istanbul ignore next */
BocRatio.install = function(Vue) {
  Vue.component(BocRatio.name, BocRatio);
};

export default BocRatio;
