import BnUpload from './src/upload';

/* istanbul ignore next */
BnUpload.install = function(Vue) {
  Vue.component(BnUpload.name, BnUpload);
};

export default BnUpload;
