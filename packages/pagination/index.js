import BocPagination from './src/pagination';

/* istanbul ignore next */
BocPagination.install = function(Vue) {
  Vue.component(BocPagination.name, BocPagination);
};

export default BocPagination;
