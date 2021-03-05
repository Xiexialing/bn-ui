import BocBar from './src/bar';

/* istanbul ignore next */
BocBar.install = function(Vue) {
  Vue.component(BocBar.name, BocBar);
};

export default BocBar;
