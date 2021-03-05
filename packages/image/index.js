import BocImage from './src/image';

/* istanbul ignore next */
BocImage.install = function(Vue) {
  Vue.component(BocImage.name, BocImage);
};

export default BocImage;
