import BocTable from './src/table';

/* istanbul ignore next */
BocTable.install = function (Vue) {
  Vue.component(BocTable.name, BocTable);
};

export default BocTable;
