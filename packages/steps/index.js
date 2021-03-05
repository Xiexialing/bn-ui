import BocSteps from './src/steps';

/* istanbul ignore next */
BocSteps.install = function(Vue) {
  Vue.component(BocSteps.name, BocSteps);
};

export default BocSteps;
