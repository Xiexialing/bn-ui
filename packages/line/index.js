import BocLine from './src/line';

/* istanbul ignore next */
BocLine.install = function(Vue) {
  Vue.component(BocLine.name, BocLine);
};

export default BocLine;
