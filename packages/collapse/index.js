import BocCollapse from './src/collapse';

/* istanbul ignore next */
BocCollapse.install = function(Vue) {
  Vue.component(BocCollapse.name, BocCollapse);
};

export default BocCollapse;
