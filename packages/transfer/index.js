import BocTransfer from './src/transfer';

/* istanbul ignore next */
BocTransfer.install = function(Vue) {
  Vue.component(BocTransfer.name, BocTransfer);
};

export default BocTransfer;
