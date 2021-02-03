import BnTable from './src/table';

/* istanbul ignore next */
BnTable.install = function (Vue) {
  Vue.component(BnTable.name, BnTable);
};

export default BnTable;
