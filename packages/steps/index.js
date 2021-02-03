import BnSteps from './src/steps';

/* istanbul ignore next */
BnSteps.install = function(Vue) {
  Vue.component(BnSteps.name, BnSteps);
};

export default BnSteps;
