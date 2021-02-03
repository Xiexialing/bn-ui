import BnTransfer from './src/transfer';

/* istanbul ignore next */
BnTransfer.install = function(Vue) {
  Vue.component(BnTransfer.name, BnTransfer);
};

export default BnTransfer;
