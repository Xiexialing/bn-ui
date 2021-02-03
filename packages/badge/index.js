import BnBadge from './src/badge';

/* istanbul ignore next */
BnBadge.install = function(Vue) {
  Vue.component(BnBadge.name, BnBadge);
};

export default BnBadge;
