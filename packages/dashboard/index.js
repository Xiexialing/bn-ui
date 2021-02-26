import BnDashboard from './src/dashboard';

/* istanbul ignore next */
BnDashboard.install = function(Vue) {
  Vue.component(BnDashboard.name, BnDashboard);
};

export default BnDashboard;
