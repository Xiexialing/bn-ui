import BnTextButton from './src/text-button';

/* istanbul ignore next */
BnTextButton.install = function(Vue) {
  Vue.component(BnTextButton.name, BnTextButton);
};

export default BnTextButton;
