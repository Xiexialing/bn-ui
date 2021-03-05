import BocCard from './src/card';

/* istanbul ignore next */
BocCard.install = function(Vue) {
  Vue.component(BocCard.name, BocCard);
};

export default BocCard;
