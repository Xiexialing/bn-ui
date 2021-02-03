import BnDialog from './src/dialog';

/* istanbul ignore next */
BnDialog.install = function(Vue) {
  Vue.component(BnDialog.name, BnDialog);
};

export default BnDialog;
