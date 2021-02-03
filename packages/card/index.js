import BnCard from './src/card';

/* istanbul ignore next */
BnCard.install = function(Vue) {
  Vue.component(BnCard.name, BnCard);
};

export default BnCard;
