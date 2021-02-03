import BnAvatar from './src/avatar';

/* istanbul ignore next */
BnAvatar.install = function(Vue) {
  Vue.component(BnAvatar.name, BnAvatar);
};

export default BnAvatar;
