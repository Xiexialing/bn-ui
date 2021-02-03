import BnImage from './src/image';

/* istanbul ignore next */
BnImage.install = function(Vue) {
  Vue.component(BnImage.name, BnImage);
};

export default BnImage;
