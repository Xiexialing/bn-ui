import BnTag from './src/tag';

/* istanbul ignore next */
BnTag.install = function (Vue) {
  Vue.component(BnTag.name, BnTag);
};

export default BnTag;
