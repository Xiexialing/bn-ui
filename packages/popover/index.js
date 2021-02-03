import BnPopover from './src/popover';

/* istanbul ignore next */
BnPopover.install = function (Vue) {
  Vue.component(BnPopover.name, BnPopover);
};

export default BnPopover;
