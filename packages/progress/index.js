import BnProgress from './src/progress';

/* istanbul ignore next */
BnProgress.install = function (Vue) {
  Vue.component(BnProgress.name, BnProgress);
};

export default BnProgress;
