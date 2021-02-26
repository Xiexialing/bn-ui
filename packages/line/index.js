import BnLine from './src/line';

/* istanbul ignore next */
BnLine.install = function(Vue) {
  Vue.component(BnLine.name, BnLine);
};

export default BnLine;
