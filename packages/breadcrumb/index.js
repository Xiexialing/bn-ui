import BocBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
BocBreadcrumb.install = function (Vue) {
  Vue.component(BocBreadcrumb.name, BocBreadcrumb);
};

export default BocBreadcrumb;
