import BnMenu from './src/menu';

/* istanbul ignore next */
BnMenu.install = function(Vue) {
  Vue.component(BnMenu.name, BnMenu);
};

export default BnMenu;
