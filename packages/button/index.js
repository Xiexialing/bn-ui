import BocButton from './src/button';

/* istanbul ignore next */
BocButton.install = function(Vue) {
  Vue.component(BocButton.name, BocButton);
};

export default BocButton;
