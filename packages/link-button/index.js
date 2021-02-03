import BnLinkButton from './src/link-button';

/* istanbul ignore next */
BnLinkButton.install = function(Vue) {
  Vue.component(BnLinkButton.name, BnLinkButton);
};

export default BnLinkButton;
