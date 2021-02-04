import BnStatus from './src/status';

/* istanbul ignore next */
BnStatus.install = function(Vue) {
  Vue.component(BnStatus.name, BnStatus);
};

export default BnStatus;
