import BnPopconfirm from './src/popconfirm';

/* istanbul ignore next */
BnPopconfirm.install = function(Vue) {
  Vue.component(BnPopconfirm.name, BnPopconfirm);
};

export default BnPopconfirm;
