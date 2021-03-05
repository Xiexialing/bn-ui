import BocPopover from './src/popover';

/* istanbul ignore next */
BocPopover.install = function (Vue) {
  Vue.component(BocPopover.name, BocPopover);
};

export default BocPopover;
