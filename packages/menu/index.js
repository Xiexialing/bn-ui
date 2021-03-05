import BocMenu from './src/menu';

/* istanbul ignore next */
BocMenu.install = function(Vue) {
  Vue.component(BocMenu.name, BocMenu);
};

export default BocMenu;
