import BnBar from './src/bar';

/* istanbul ignore next */
BnBar.install = function(Vue) {
  Vue.component(BnBar.name, BnBar);
};

export default BnBar;
