import BocLink from './src/link';

/* istanbul ignore next */
BocLink.install = function(Vue) {
  Vue.component(BocLink.name, BocLink);
};

export default BocLink;
