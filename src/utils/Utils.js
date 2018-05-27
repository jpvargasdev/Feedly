/**
 * Utils
 */
"use strict";
const Utils = {
  setTimeToMinutes: function(num) {
    return num * 60 * 1000;
  },

  formatDate: function(date){
    let firstSection = date.split('T')[0];
    let secondSection = date.split('T')[1];

    let year = firstSection.split('-')[0];
    let month = firstSection.split('-')[1]
    let day = firstSection.split('-')[2]
    let hour = secondSection.split(':')[0];
    let minute = secondSection.split(':')[1];

    return `${day}/${month}/${year} ${hour}:${minute}`;
  }
};
  
module.exports = Utils;