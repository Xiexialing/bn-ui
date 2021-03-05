import BocTabs from './src/tabs';

/* istanbul ignore next */
BocTabs.install = function (Vue) {
  Vue.component(BocTabs.name, BocTabs);
};

export default BocTabs;
