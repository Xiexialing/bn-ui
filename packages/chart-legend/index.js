import BnChartLegend from './src/chart-legend';

/* istanbul ignore next */
BnChartLegend.install = function(Vue) {
  Vue.component(BnChartLegend.name, BnChartLegend);
};

export default BnChartLegend;
