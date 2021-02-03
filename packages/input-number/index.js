import BnInputNumber from './src/input-number';

/* istanbul ignore next */
BnInputNumber.install = function (Vue) {
  Vue.component(BnInputNumber.name, BnInputNumber);
};

export default BnInputNumber;
