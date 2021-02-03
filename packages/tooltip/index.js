import BnTooltip from './src/tooltip';

/* istanbul ignore next */
BnTooltip.install = function(Vue) {
  Vue.component(BnTooltip.name, BnTooltip);
};

export default BnTooltip;
