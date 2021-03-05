import BocDialog from './src/dialog';

/* istanbul ignore next */
BocDialog.install = function(Vue) {
  Vue.component(BocDialog.name, BocDialog);
};

export default BocDialog;
