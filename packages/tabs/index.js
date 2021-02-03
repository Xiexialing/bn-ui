import BnTabs from './src/tabs';

/* istanbul ignore next */
BnTabs.install = function (Vue) {
  Vue.component(BnTabs.name, BnTabs);
};

export default BnTabs;
