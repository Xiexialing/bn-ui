import BocChartLegend from './src/chart-legend';

/* istanbul ignore next */
BocChartLegend.install = function(Vue) {
  Vue.component(BocChartLegend.name, BocChartLegend);
};

export default BocChartLegend;
