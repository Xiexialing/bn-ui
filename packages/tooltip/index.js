import BocTooltip from './src/tooltip';

/* istanbul ignore next */
BocTooltip.install = function(Vue) {
  Vue.component(BocTooltip.name, BocTooltip);
};

export default BocTooltip;
