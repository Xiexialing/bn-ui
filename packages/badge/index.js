import BocBadge from './src/badge';

/* istanbul ignore next */
BocBadge.install = function(Vue) {
  Vue.component(BocBadge.name, BocBadge);
};

export default BocBadge;
