import BocUpload from './src/upload';

/* istanbul ignore next */
BocUpload.install = function(Vue) {
  Vue.component(BocUpload.name, BocUpload);
};

export default BocUpload;
