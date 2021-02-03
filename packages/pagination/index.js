import BnPagination from './src/pagination';

/* istanbul ignore next */
BnPagination.install = function(Vue) {
  Vue.component(BnPagination.name, BnPagination);
};

export default BnPagination;
