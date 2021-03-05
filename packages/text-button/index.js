import BocTextButton from './src/text-button';

/* istanbul ignore next */
BocTextButton.install = function(Vue) {
  Vue.component(BocTextButton.name, BocTextButton);
};

export default BocTextButton;
