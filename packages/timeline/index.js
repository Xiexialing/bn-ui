import BocTimeline from './src/timeline';

/* istanbul ignore next */
BocTimeline.install = function(Vue) {
  Vue.component(BocTimeline.name, BocTimeline);
};

export default BocTimeline;
