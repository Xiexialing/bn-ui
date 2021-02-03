import BnListCard from './src/list-card';

/* istanbul ignore next */
BnListCard.install = function(Vue) {
  Vue.component(BnListCard.name, BnListCard);
};

export default BnListCard;
