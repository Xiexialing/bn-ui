import BocLinkButton from './src/link-button';

/* istanbul ignore next */
BocLinkButton.install = function(Vue) {
  Vue.component(BocLinkButton.name, BocLinkButton);
};

export default BocLinkButton;
