import BocProgress from './src/progress';

/* istanbul ignore next */
BocProgress.install = function (Vue) {
  Vue.component(BocProgress.name, BocProgress);
};

export default BocProgress;
