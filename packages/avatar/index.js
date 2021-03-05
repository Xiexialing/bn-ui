import BocAvatar from './src/avatar';

/* istanbul ignore next */
BocAvatar.install = function(Vue) {
  Vue.component(BocAvatar.name, BocAvatar);
};

export default BocAvatar;
