import BocCalendar from './src/calendar';

/* istanbul ignore next */
BocCalendar.install = function(Vue) {
  Vue.component(BocCalendar.name, BocCalendar);
};

export default BocCalendar;
