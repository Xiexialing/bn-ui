import BnBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
BnBreadcrumb.install = function (Vue) {
  Vue.component(BnBreadcrumb.name, BnBreadcrumb);
};

export default BnBreadcrumb;
