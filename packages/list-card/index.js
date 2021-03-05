import BocListCard from './src/list-card';

/* istanbul ignore next */
BocListCard.install = function(Vue) {
  Vue.component(BocListCard.name, BocListCard);
};

export default BocListCard;
