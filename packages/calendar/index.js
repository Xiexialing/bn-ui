import BnCalendar from './src/calendar';

/* istanbul ignore next */
BnCalendar.install = function(Vue) {
  Vue.component(BnCalendar.name, BnCalendar);
};

export default BnCalendar;
