import BocDashboard from './src/dashboard';

/* istanbul ignore next */
BocDashboard.install = function(Vue) {
  Vue.component(BocDashboard.name, BocDashboard);
};

export default BocDashboard;
