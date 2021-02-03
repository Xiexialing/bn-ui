import BnDrawer from './src/drawer';

/* istanbul ignore next */
BnDrawer.install = function(Vue) {
  Vue.component(BnDrawer.name, BnDrawer);
};

export default BnDrawer;
