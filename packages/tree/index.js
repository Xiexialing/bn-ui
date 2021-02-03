import BnTree from './src/tree';

/* istanbul ignore next */
BnTree.install = function (Vue) {
  Vue.component(BnTree.name, BnTree);
};

export default BnTree;
