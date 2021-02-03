import BnButton from './src/button';

/* istanbul ignore next */
BnButton.install = function(Vue) {
  Vue.component(BnButton.name, BnButton);
};

export default BnButton;
