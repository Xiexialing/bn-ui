import BocTree from './src/tree';

/* istanbul ignore next */
BocTree.install = function (Vue) {
  Vue.component(BocTree.name, BocTree);
};

export default BocTree;
