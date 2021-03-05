import BocTag from './src/tag';

/* istanbul ignore next */
BocTag.install = function (Vue) {
  Vue.component(BocTag.name, BocTag);
};

export default BocTag;
