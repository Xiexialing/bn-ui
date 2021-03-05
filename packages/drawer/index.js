import BocDrawer from './src/drawer';

/* istanbul ignore next */
BocDrawer.install = function(Vue) {
  Vue.component(BocDrawer.name, BocDrawer);
};

export default BocDrawer;
