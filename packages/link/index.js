import BnLink from './src/link';

/* istanbul ignore next */
BnLink.install = function(Vue) {
  Vue.component(BnLink.name, BnLink);
};

export default BnLink;
