import BocPageHeader from './src/page-header';

/* istanbul ignore next */
BocPageHeader.install = function(Vue) {
  Vue.component(BocPageHeader.name, BocPageHeader);
};

export default BocPageHeader;
