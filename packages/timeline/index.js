import BnTimeline from './src/timeline';

/* istanbul ignore next */
BnTimeline.install = function(Vue) {
  Vue.component(BnTimeline.name, BnTimeline);
};

export default BnTimeline;
