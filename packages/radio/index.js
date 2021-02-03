import BnRadio from './src/radio';

/* istanbul ignore next */
BnRadio.install = function(Vue) {
  Vue.component(BnRadio.name, BnRadio);
};

export default BnRadio;
